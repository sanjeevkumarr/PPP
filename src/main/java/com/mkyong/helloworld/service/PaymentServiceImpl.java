/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mkyong.helloworld.service;

import ch.qos.logback.core.net.ObjectWriter;
import com.mkyong.helloworld.paymentgateway.Paypal;
import com.paypal.api.payments.Address;
import com.paypal.api.payments.Agreement;
import com.paypal.api.payments.Amount;
import com.paypal.api.payments.ChargeModels;
import com.paypal.api.payments.CreateProfileResponse;
import com.paypal.api.payments.CreditCard;
import com.paypal.api.payments.CreateProfileResponse;
import com.paypal.api.payments.CreditCardToken;
import com.paypal.api.payments.Currency;
import com.paypal.api.payments.Details;
import com.paypal.api.payments.FlowConfig;
import com.paypal.api.payments.InputFields;
import com.paypal.api.payments.FundingInstrument;
import com.paypal.api.payments.FlowConfig;
import com.paypal.api.payments.InputFields;
import com.paypal.api.payments.Item;
import com.paypal.api.payments.ItemList;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.MerchantPreferences;
import com.paypal.api.payments.Patch;
import com.paypal.api.payments.PatchRequest;
import com.paypal.api.payments.Payer;
import com.paypal.api.payments.PayerInfo;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.PaymentDefinition;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.api.payments.PaymentOptions;
import com.paypal.api.payments.Plan;
import com.paypal.api.payments.Presentation;
import com.paypal.api.payments.RedirectUrls;
import com.paypal.api.payments.ShippingAddress;
import com.paypal.api.payments.Transaction;
import com.paypal.api.payments.WebProfile;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.OAuthTokenCredential;
import com.paypal.base.rest.PayPalModel;
import com.paypal.base.rest.PayPalRESTException;
import com.paypal.svcs.services.AdaptivePaymentsService;
import com.paypal.svcs.types.ap.PayRequest;
import com.paypal.svcs.types.ap.PayResponse;
import com.paypal.svcs.types.ap.PaymentDetailsRequest;
import com.paypal.svcs.types.ap.PaymentDetailsResponse;
import com.paypal.svcs.types.ap.Receiver;
import com.paypal.svcs.types.ap.ReceiverList;
import com.paypal.svcs.types.ap.SenderIdentifier;
import com.paypal.svcs.types.ap.TaxIdDetails;
import com.paypal.svcs.types.common.RequestEnvelope;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
import java.util.UUID;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Service;
import urn.ebay.api.PayPalAPI.CreateBillingAgreementReq;
import urn.ebay.api.PayPalAPI.CreateBillingAgreementRequestType;
import urn.ebay.api.PayPalAPI.CreateBillingAgreementResponseType;
import urn.ebay.api.PayPalAPI.CreateRecurringPaymentsProfileReq;
import urn.ebay.api.PayPalAPI.CreateRecurringPaymentsProfileRequestType;
import urn.ebay.api.PayPalAPI.CreateRecurringPaymentsProfileResponseType;
import urn.ebay.api.PayPalAPI.DoDirectPaymentReq;
import urn.ebay.api.PayPalAPI.DoDirectPaymentRequestType;
import urn.ebay.api.PayPalAPI.DoDirectPaymentResponseType;
import urn.ebay.api.PayPalAPI.DoReferenceTransactionReq;
import urn.ebay.api.PayPalAPI.DoReferenceTransactionRequestType;
import urn.ebay.api.PayPalAPI.DoReferenceTransactionResponseType;
import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;
import urn.ebay.api.PayPalAPI.SetExpressCheckoutReq;
import urn.ebay.api.PayPalAPI.SetExpressCheckoutRequestType;
import urn.ebay.api.PayPalAPI.SetExpressCheckoutResponseType;
import urn.ebay.apis.CoreComponentTypes.BasicAmountType;
import urn.ebay.apis.eBLBaseComponents.AddressType;
import urn.ebay.apis.eBLBaseComponents.BillingAgreementDetailsType;
import urn.ebay.apis.eBLBaseComponents.BillingCodeType;
import urn.ebay.apis.eBLBaseComponents.BillingPeriodDetailsType;
import urn.ebay.apis.eBLBaseComponents.BillingPeriodType;
import urn.ebay.apis.eBLBaseComponents.BuyerDetailsType;
import urn.ebay.apis.eBLBaseComponents.CountryCodeType;
import urn.ebay.apis.eBLBaseComponents.CreateRecurringPaymentsProfileRequestDetailsType;
import urn.ebay.apis.eBLBaseComponents.CreditCardDetailsType;
import urn.ebay.apis.eBLBaseComponents.CreditCardTypeType;
import urn.ebay.apis.eBLBaseComponents.CurrencyCodeType;
import urn.ebay.apis.eBLBaseComponents.DetailLevelCodeType;
import urn.ebay.apis.eBLBaseComponents.DoDirectPaymentRequestDetailsType;
import urn.ebay.apis.eBLBaseComponents.DoReferenceTransactionRequestDetailsType;
import urn.ebay.apis.eBLBaseComponents.DoReferenceTransactionResponseDetailsType;
import urn.ebay.apis.eBLBaseComponents.ItemCategoryType;
import urn.ebay.apis.eBLBaseComponents.MerchantPullPaymentCodeType;
import urn.ebay.apis.eBLBaseComponents.PayerInfoType;
import urn.ebay.apis.eBLBaseComponents.PaymentActionCodeType;
import urn.ebay.apis.eBLBaseComponents.PaymentDetailsItemType;
import urn.ebay.apis.eBLBaseComponents.PaymentDetailsType;
import urn.ebay.apis.eBLBaseComponents.PaymentRequestInfoType;
import urn.ebay.apis.eBLBaseComponents.PersonNameType;
import urn.ebay.apis.eBLBaseComponents.RecurringPaymentsProfileDetailsType;
import urn.ebay.apis.eBLBaseComponents.ScheduleDetailsType;
import urn.ebay.apis.eBLBaseComponents.SetExpressCheckoutRequestDetailsType;

//import com.paypal.sdk.profiles.APIProfile; 
//import com.paypal.sdk.profiles.ProfileFactory; 
//import com.paypal.sdk.exceptions.PayPalException; 
//import com.paypal.sdk.core.nvp.NVPEncoder; 
//import com.paypal.sdk.core.nvp.NVPDecoder; 
//import com.paypal.sdk.services.NVPCallerServices; 
//import com.sapienter.jbilling.server.payment.tasks.paypal.dto.*; 
//import com.paypal.svcs.types.ap.PayRequest;
/**
 *
 * @author U43721
 */
@Service
public class PaymentServiceImpl implements PaymentService {

    public APIContext getAuthToken() throws Exception {

        Map<String, String> config = new HashMap<String, String>();
        config.put("mode", "sandbox");
//        OAuthTokenCredential  authTokenCredential = new OAuthTokenCredential(, config);                
//        System.out.println(" AuthTokenCredential.getAccessToken  " + authTokenCredential.getAccessToken());
//        System.out.println(" AuthTokenCredential.getAccessToken  " + authTokenCredential.expiresIn());                

        return null;
    }

    public Payment pay() throws Exception {

        this.getAuthToken();

        return this.createPayment();
//        Payment payment = new Payment();        
//        payment =  payment.create();        

//        System.out.println(" Payment " + payment.toString());        
    }

    public Payment createPayment() throws Exception {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Payment createdPayment = null;

//        Cre
        // ###Details
        // Let's you specify details of a payment amount.
        Details details = new Details();
        details.setShipping("1");
        details.setSubtotal("90");
        details.setTax("1");
        // ###Amount
        // Let's you specify a payment amount.
        Amount amount = new Amount();
        amount.setCurrency("BRL");
        // Total must be equal to sum of shipping, tax and subtotal.
        amount.setTotal("92");
        amount.setDetails(details);
        // ###Transaction
        // A transaction defines the contract of a
        // payment - what is the payment for and who
        // is fulfilling it. Transaction is created with
        // a `Payee` and `Amount` types
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);

        System.out.println("adding payment option");

        transaction.setPaymentOptions(new PaymentOptions().setAllowedPaymentMethod("IMMEDIATE_PAY"));
        transaction.setDescription("This is the payment transaction description.");

        // ### Items
        Item item = new Item();
        item.setName("For VM creation").setQuantity("1").setCurrency("BRL").setPrice("90");
        ItemList itemList = new ItemList();
        List<Item> items = new ArrayList<Item>();
        items.add(item);
        itemList.setItems(items);
        transaction.setItemList(itemList);

        // The Payment creation API requires a list of
        // Transaction; add the created `Transaction`
        // to a List
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        // ###Payer
        // A resource representing a Payer that funds a payment
        // Payment Method
        // as 'paypal'
        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        // ###Payment
        // A Payment Resource; create one using
        // the above types and intent as 'sale'
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);
        payment.setExperienceProfileId("XP-G3Z5-9NMS-FCGR-5F9U");

        // ###Redirect URLs
        RedirectUrls redirectUrls = new RedirectUrls();
        String guid = UUID.randomUUID().toString().replaceAll("-", "");
        redirectUrls.setReturnUrl("http://localhost:8090/spring4/success");
        redirectUrls.setCancelUrl("http://localhost:8090/spring4/cancel");
        payment.setRedirectUrls(redirectUrls);

        try {
            String approval_url = "";
            createdPayment = payment.create(apiContext);
            System.out.println("Created payment with id = " + createdPayment.getId() + " and status = " + createdPayment.getState());
            // ###Payment Approval Url
            Iterator<Links> links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = links.next();
                System.out.println(" approval_url " + link.getHref());
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    approval_url = link.getHref();
                    System.out.println(" ******************************approval_url****************************** ");
                    System.out.println(" approval_url " + link.getHref());
                    System.out.println(" ******************************approval_url****************************** ");
                }
            }

            System.out.println(" Payment.getLastRequest() " + Payment.getLastRequest());
            System.out.println(" Payment.getLastRequest() " + Payment.getLastResponse());
            System.out.println(" Payment.getLastRequest() " + createdPayment.getId());
            System.out.println(" Payment.getLastRequest() " + createdPayment);

            return createdPayment;

        } catch (PayPalRESTException e) {
            e.printStackTrace();
        }

        return null;
    }

    public String getPayment(String paymentId, String token) throws Exception {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
//
        Payment createdPayment = Payment.get(apiContext, paymentId);

        System.out.println("getIntent " + createdPayment.getIntent());
        System.out.println("getState " + createdPayment.getState());
        System.out.println("getPayer " + createdPayment.getPayer());

        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId("46VNWJGHEHKNG");

        try {

            createdPayment = createdPayment.execute(apiContext, paymentExecution);
            System.out.println("Executed The Payment" + Payment.getLastRequest());
            System.out.println("Executed The Payment" + Payment.getLastResponse());
            System.out.println("Executed The Payment");

        } catch (Exception e) {
            e.printStackTrace();
        }

//        payment.
//      
        return null;
    }

    @Override
    public WebProfile createExperienceProfile(String profileName) throws Exception {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
        WebProfile webProfile = new WebProfile(profileName);

        Presentation presentation = new Presentation();
        presentation.setBrandName("FogPanel");
        presentation.setLogoImage("https://manage.fogpanel.com/ui/images/fog_logo.png");
        presentation.setLocaleCode("BR");

        InputFields fields = new InputFields();
        fields.setAddressOverride(1);
        fields.setAllowNote(Boolean.FALSE);
        fields.setNoShipping(1);

        webProfile.setInputFields(fields);
        webProfile.setPresentation(presentation);

        CreateProfileResponse response = webProfile.create(apiContext);

        System.out.println(" Experience profile id  : " + response.getId());
        return webProfile;

    }

    @Override
    public WebProfile getWebProfileById(String profileId) throws PayPalRESTException {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        return WebProfile.get(apiContext, profileId);
    }

    @Override
    public List<WebProfile> getAllWebProfile() throws PayPalRESTException {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
        return WebProfile.getList(apiContext);
    }

    public Payment createCreditCardPayment() throws Exception {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        System.out.println("Getting API context : " + apiContext);

        Payment createdPayment = null;

        // ###Details
        // Let's you specify details of a payment amount.
        Details details = new Details();
        details.setShipping("1");
        details.setSubtotal("5");
        details.setTax("1");
        // ###Amount
        // Let's you specify a payment amount.
        Amount amount = new Amount();
        amount.setCurrency("USD");
        // Total must be equal to sum of shipping, tax and subtotal.
        amount.setTotal("7");
//        amount.setDetails(details);
        // ###Transaction
        // A transaction defines the contract of a
        // payment - what is the payment for and who
        // is fulfilling it. Transaction is created with
        // a `Payee` and `Amount` types
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);

        System.out.println("adding payment option");

//        transaction.setPaymentOptions(new PaymentOptions().setAllowedPaymentMethod("IMMEDIATE_PAY"));
//        transaction.setAmount(amount);
        transaction.setDescription("This is the payment transaction description.");

        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        FundingInstrument fundingInstrument = new FundingInstrument();
        CreditCard creditCard = new CreditCard();

        creditCard.setNumber("5229784639382079");
        creditCard.setType("mastercard");
        creditCard.setExpireMonth(9);
        creditCard.setExpireYear(2021);
        creditCard.setCvv2(123);
        creditCard.setFirstName("personalbr");
        creditCard.setLastName("personalbr");
        fundingInstrument.setCreditCard(creditCard);

//For usd:
//
//        creditCard.setNumber("4032038243629304");
//        creditCard.setType("VISA");
//        creditCard.setExpireMonth(9);
//        creditCard.setExpireYear(2021);
//        creditCard.setCvv2(123);
//        creditCard.setFirstName("test");
//        creditCard.setLastName("test");
        List<FundingInstrument> fundingInstruments = new ArrayList<>();
        fundingInstruments.add(fundingInstrument);

        // ###Payer
        // A resource representing a Payer that funds a payment
        // Payment Method
        // as 'paypal'
        Payer payer = new Payer();
        payer.setPaymentMethod("credit_card");
        payer.setFundingInstruments(fundingInstruments);

        // ###Payment
        // A Payment Resource; create one using
        // the above types and intent as 'sale'
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);

//        // ###Redirect URLs
        RedirectUrls redirectUrls = new RedirectUrls();
        String guid = UUID.randomUUID().toString().replaceAll("-", "");
        redirectUrls.setReturnUrl("http://localhost:8080/spring4/success");
        redirectUrls.setCancelUrl("http://localhost:8080/spring4/cancel");
        payment.setRedirectUrls(redirectUrls);

        try {

            String approval_url = "";

            createdPayment = payment.create(apiContext);

            System.out.println("Created payment with id = " + createdPayment.getId() + " and status = " + createdPayment.getState());

            // ###Payment Approval Url
            Iterator<Links> links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = links.next();
                System.out.println(" approval_url " + link.getHref());
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    approval_url = link.getHref();
                    System.out.println(" ******************************approval_url****************************** ");
                    System.out.println(" approval_url " + link.getHref());
                    System.out.println(" ******************************approval_url****************************** ");
                }
            }

            System.out.println(" Payment.getLastRequest() " + Payment.getLastRequest());

            System.out.println(" Payment.getLastRequest() " + Payment.getLastResponse());

            System.out.println(" Payment.getLastRequest() " + createdPayment.getId());

            return createdPayment;

        } catch (PayPalRESTException e) {

            e.printStackTrace();

        }
        return null;
    }

    //Embedded payment.                
    @Override
    public Map<String, Object> embeddedPayment(Map<String, Object> model) throws Exception {

        PayRequest req = new PayRequest();
        RequestEnvelope requestEnvelope = new RequestEnvelope("en_US");
        req.setRequestEnvelope(requestEnvelope);
        List<Receiver> receiver = new ArrayList<Receiver>();
        Receiver rec = new Receiver();
        rec.setAmount(Double.parseDouble("10.0"));
        rec.setEmail("businessbr@gmail.com");
        receiver.add(rec);
        ReceiverList receiverlst = new ReceiverList(receiver);
        req.setReceiverList(receiverlst);
        req.setActionType("PAY");
        req.setCancelUrl("http://localhost:8080/spring4/cancel");
        req.setReturnUrl("http://localhost:8080/spring4/success");
        req.setCurrencyCode("BRL");

        Map<String, String> configurationMap = getAcctAndConfig();

        System.out.println("before execution:  ");

        AdaptivePaymentsService service = new AdaptivePaymentsService(configurationMap);

        System.out.println("LastResponse :  " + service.getLastRequest());
        System.out.println("LastResponse :  " + service.getLastResponse());

        PayResponse resp = service.pay(req);
        return getResponse(model, service.pay(req));
    }

    public Map<String, Object> getResponse(Map<String, Object> model, PayResponse resp) throws Exception {

        System.out.println(" In respionse " + resp);

        if (resp != null) {

            System.out.println(" In response ============> " + resp.getResponseEnvelope().getAck().toString());
            System.out.println(" In response ============> " + resp.getResponseEnvelope().getCorrelationId());
            System.out.println(" In response ============> " + resp.getPaymentExecStatus());

            if (resp.getResponseEnvelope().getAck().toString().equalsIgnoreCase("SUCCESS")) {

//                Map<Object, Object> map = new LinkedHashMap<Object, Object>();
                model.put("Ack", resp.getResponseEnvelope().getAck());
                model.put("Correlation ID", resp.getResponseEnvelope().getCorrelationId());
                model.put("Time Stamp", resp.getResponseEnvelope().getTimestamp());
                model.put("Pay Key", resp.getPayKey());
                model.put("Payment Execution Status", resp.getPaymentExecStatus());
                model.put("URL", "https://www.sandbox.paypal.com/incontext?token=" + resp.getPayKey());
                System.out.println(" MODEL ====== > " + model);

                return model;
            } else {
                System.out.println(resp.getError().get(0).getMessage());
                System.out.println(resp.getError().size());
                System.out.println(resp.getError());
                throw new Exception("Exception in the response.");

            }
        }

        return null;
    }

    // Creates a configuration map containing credentials and other required configuration parameters.
    public static final Map<String, String> getAcctAndConfig() {
        Map<String, String> configMap = new HashMap<String, String>();
        configMap.putAll(getConfig());

        // Account Credential
//        configMap.put("acct1.UserName", "businessbr_api1.fogpanel.com");
//        configMap.put("acct1.Password", "YZJCEHLD97QKCWQU");
//        configMap.put("acct1.Signature", "An5ns1Kso7MWUdW4ErQKJJJ4qi4-A2fni5Uo0sejwAJfuRN1d167ZJy7");
//        configMap.put("acct1.AppId", "APP-80W284485P519543T");
        configMap.put("acct1.UserName", "business_api1.fogpanel.com");
        configMap.put("acct1.Password", "ZY36R677MGTS4D7T");
        configMap.put("acct1.Signature", "AFcWxV21C7fd0v3bYYYRCpSSRl31A6tLbkU.DxV6Qi5f5d6p.cWTgyZc");
        configMap.put("acct1.AppId", "APP-80W284485P519543T");

        return configMap;
    }

    public static final Map<String, String> getConfig() {
        Map<String, String> configMap = new HashMap<String, String>();

        // Endpoints are varied depending on whether sandbox OR live is chosen for mode
        configMap.put("mode", "sandbox");

        // These values are defaulted in SDK. If you want to override default values, uncomment it and add your value.
        // configMap.put("http.ConnectionTimeOut", "5000");
        // configMap.put("http.Retry", "2");
        // configMap.put("http.ReadTimeOut", "30000");
        // configMap.put("http.MaxConnection", "100");
        return configMap;
    }

    @Override
    public String doDirectPayment() throws Exception {

        DoDirectPaymentReq doPaymentReq = new DoDirectPaymentReq();
        DoDirectPaymentRequestType pprequest = new DoDirectPaymentRequestType();
        DoDirectPaymentRequestDetailsType details = new DoDirectPaymentRequestDetailsType();
        PaymentDetailsType paymentDetails = new PaymentDetailsType();

        BasicAmountType amount = new BasicAmountType();
        amount.setValue("10.0");
        amount.setCurrencyID(CurrencyCodeType.fromValue("BRL"));
        paymentDetails.setOrderTotal(amount);

        //Get payer address
        AddressType shipTo = new AddressType();
        shipTo.setName("test" + " " + "facilitator");
        shipTo.setStreet1("1234 Main Street");
        shipTo.setCityName("Rio De Janeiro");
        shipTo.setStateOrProvince("RL");
        shipTo.setCountry(CountryCodeType.fromValue("BR"));
        shipTo.setPostalCode("22021-001");
        paymentDetails.setShipToAddress(shipTo);

        //Get credit card details.
        CreditCardDetailsType cardDetails = new CreditCardDetailsType();
        cardDetails.setCreditCardType(CreditCardTypeType.fromValue("Visa"));
        cardDetails.setCreditCardNumber("4002350589119162");
        cardDetails.setExpMonth(Integer.parseInt("09"));
        cardDetails.setExpYear(Integer.parseInt("2021"));
        cardDetails.setCVV2("123");

        //Payer info.
        PayerInfoType payer = new PayerInfoType();
        PersonNameType name = new PersonNameType();
        name.setFirstName("test");
        name.setLastName("buyer");
        payer.setPayerName(name);
        payer.setPayerCountry(CountryCodeType.fromValue("BR"));
        payer.setAddress(shipTo);
        cardDetails.setCardOwner(payer);
        details.setPaymentDetails(paymentDetails);
        details.setCreditCard(cardDetails);
        details.setIPAddress("127.0.0.1");
        details.setPaymentAction(PaymentActionCodeType.fromValue("Sale"));
        pprequest.setDoDirectPaymentRequestDetails(details);
        doPaymentReq.setDoDirectPaymentRequest(pprequest);
        System.out.println(" <=================== Before request ===================> ");
        try {

            Map<String, String> configurationMap = getAcctAndConfig();
            PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);

            DoDirectPaymentResponseType ddresponse = service.doDirectPayment(doPaymentReq);
            System.out.println(" <=================== after request ===================> " + ddresponse);

            if (ddresponse != null) {

                if (ddresponse.getAck().toString().equalsIgnoreCase("SUCCESS")) {

                    Map<Object, Object> map = new LinkedHashMap<Object, Object>();
                    map.put("Ack", ddresponse.getAck());
                    map.put("Transaction ID", ddresponse.getTransactionID());
                    map.put("Amount", ddresponse.getAmount().getValue() + " " + ddresponse.getAmount().getCurrencyID());
                    map.put("Payment Status", ddresponse.getPaymentStatus());
                    map.put("Payment Status", ddresponse.getTransactionID());

                    System.out.println(" map ===================> " + map);
                } else {
                    System.out.println(" <=================== ddresponse.getAck().toString().equalsIgnoreCase(\"SUCCESS\") ===================> " + ddresponse.getAck().toString().equalsIgnoreCase("SUCCESS"));
                }
            }

        } catch (Exception ex) {
            ex.printStackTrace();

            ex.getMessage();
        }

        return null;
    }

    @Override
    public Plan create(APIContext context) throws PayPalRESTException, IOException {

        // populate Plan object that we are going to play with
        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Plan plan = new Plan();
        plan.setName("Plan-one");
        plan.setDescription("Plan-one -TEST ");
        plan.setType("fixed");

        List<PaymentDefinition> definitions = new ArrayList<>();
        PaymentDefinition definition = new PaymentDefinition();
        definition.setName("definition name ");
        definition.setType("REGULAR");
        definition.setFrequency("DAY");
        definition.setFrequencyInterval("1");
        definition.setCycles("15");
        Currency currency = new Currency();
        currency.setCurrency("BRL");
        currency.setValue("50");
        definition.setAmount(currency);
        definitions.add(definition);

        ChargeModels chargeModels = new ChargeModels();
        chargeModels.setAmount(currency);
        chargeModels.setType("SHIPPING");
        List<ChargeModels> modelses = new ArrayList<>();
        modelses.add(chargeModels);

        definition.setChargeModels(modelses);

        MerchantPreferences mp = new MerchantPreferences();
        mp.setSetupFee(currency);
        mp.setCancelUrl("http://localhost:8090/spring4/cancel");
        mp.setReturnUrl("http://localhost:8090/spring4/approve");
        mp.setAutoBillAmount("YES");
        mp.setInitialFailAmountAction("CONTINUE");
        mp.setMaxFailAttempts("0");

        plan.setPaymentDefinitions(definitions);
        plan.setMerchantPreferences(mp);

        System.out.println("createdPlan   " + plan);
        Plan createdPlan = plan.create(apiContext);

        System.out.println("createdPlan   " + createdPlan.getLastRequest());
        System.out.println("createdPlan   " + createdPlan.getLastResponse());

        return createdPlan;
    }

    public Plan udpatePlan(String id) throws PayPalRESTException, IOException {

        // populate Plan object that we are going to play with
        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Patch patch = new Patch();
//        PayPalModel model = new PayPalModel();

        patch.setOp("replace");
        patch.setPath("/");

        HashMap map = new HashMap();

        Object put = map.put("state", "ACTIVE");

        patch.setValue(map);

        List<Patch> patchRequests = new ArrayList();
        patchRequests.add(patch);

        Plan plan = new Plan();
//        plan = plan.get(apiContext, id);        
        plan = plan.setId(id);

//        System.out.println("getPlan   " + plan.getLastRequest());
        System.out.println("patchRequests   " + plan);
        System.out.println("patchRequests   " + patchRequests);

        plan.update(apiContext, patchRequests);

//        System.out.println("updatePlan   " + plan.getLastRequest());
//        System.out.println("updatePlan   " + plan.getLastResponse());
        plan.get(apiContext, id);

        System.out.println("getLastRequest   ************->" + plan.getLastRequest());
        System.out.println("getLastResponse   ***********->" + plan.getLastResponse());

        return null;
    }

    /**
     *
     * @param id
     * @return
     * @throws PayPalRESTException
     * @throws IOException
     */
    @Override
    public Plan getPlan(String id) throws PayPalRESTException, IOException {

        // populate Plan object that we are going to play with
        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Plan plan = new Plan();
//        plan = plan.get(apiContext, id);        
        plan = plan.setId(id);

        Plan res = plan.get(apiContext, id);
        
//        List<PaymentDefinition> definitions  = res.getPaymentDefinitions();
//        for(PaymentDefinition definition : definitions) {
//            List<ChargeModels> chargeModelses  =  definition.getChargeModels();
//            for(ChargeModels chargeModels :chargeModelses ) {                
//                System.out.println("Before *************************** " );
//                System.out.println("Currency " + chargeModels.getAmount().getCurrency());
//                System.out.println("Value " + chargeModels.getAmount().getValue());                
//                System.out.println("Before *************************** " );
//                
//                Currency currency = new Currency();
//                currency.setCurrency("BRL");
//                currency.setValue("130");                                
//                
//                chargeModels.setAmount(currency);
//                System.out.println("After 1 *************************** " );
//                System.out.println("Currency " + chargeModels.getAmount().getCurrency());
//                System.out.println("Value " + chargeModels.getAmount().getValue());                
//                System.out.println("After1 *************************** " );                
//            }
//        }  
//        
//         for (PaymentDefinition definition : definitions) {
//            List<ChargeModels> chargeModelses = definition.getChargeModels();
//            for (ChargeModels chargeModels : chargeModelses) {                
//                System.out.println("After 1 *************************** " );
//                System.out.println("Currency " + chargeModels.getAmount().getCurrency());
//                System.out.println("Value " + chargeModels.getAmount().getValue());                
//                System.out.println("After1 *************************** " );                
//            }
//        }
//        
//        res.setPaymentDefinitions(definitions);
//        
//        
////         APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
//
//        Patch patch = new Patch();
////        PayPalModel model = new PayPalModel();
//
//        patch.setOp("replace");
//        patch.setPath("/");
//
//        HashMap map = new HashMap();
//
//        Object put = map.put("payment_definitions", definitions );
//
//        patch.setValue(map);
//
//        List<Patch> patchRequests = new ArrayList();
//        patchRequests.add(patch);
//
////        Plan plan = new Plan();
////        plan = plan.get(apiContext, id);        
//        plan = plan.setId(id);
//        
//        plan.update(apiContext, patchRequests);

//        System.out.println("updatePlan   " + plan.getLastRequest());
//        System.out.println("updatePlan   " + plan.getLastResponse());
//        plan.get(apiContext, id);

//        System.out.println("getLastRequest   ************->" + plan.getLastRequest());
//        System.out.println("getLastResponse   ***********->" + plan.getLastResponse());

        
        

        System.out.println("plan details -------------> " + res);

        return null;
    }

    @Override
    public Agreement createBillingAgreement() throws PayPalRESTException, IOException {

        // populate Plan object that we are going to play with
        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Agreement a = new Agreement();

        a.setName("Daily agreement ");
        a.setDescription("Daily  agreement for 15 days");

//        TimeZone tz = TimeZone.getTimeZone("UTC");
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'");
//        df.setTimeZone(tz);
//        String nowAsISO = df.format(new Date());
//        "2016-010-19T00:37:04Z"
        a.setStartDate("2016-10-06T00:37:04Z");

        Plan plan = new Plan();
        plan = plan.setId("P-5HJ40302G8099151TSN5VQPA");

        a.setPlan(plan);

        Address address = new Address();

        address.setCity("Cbe");
        address.setCountryCode("BR");
        address.setLine1("1 C K nagar");
        address.setPhone("8807282182");
        address.setPostalCode("78954");
        address.setState("DB");

        a.setShippingAddress(address);

        Payer payer = new Payer();
        
//        PayerInfo info = new PayerInfo();
//        info.setEmail("paypal2-buyer@rsantosit.com.br");
        
//        FundingInstrument fi = new FundingInstrument()
        
        payer.setPaymentMethod("paypal");

        a.setPayer(payer);

//        System.out.println("a" + a);
        Agreement newAgreement = a.create(apiContext);

        System.out.println("Created agrrement  ----------------->  " + newAgreement.getLastRequest());
        System.out.println("Created agrrement  ----------------->  " + newAgreement.getLastResponse());
        System.out.println("Created token  ----------------->  " + newAgreement.getToken());

//        Agreement executedAgreement = a.execute(apiContext, newAgreement.getToken());

//        System.out.println("executed  agreemtn  " + executedAgreement);

        return null;
    }

    @Override
    public Agreement executeBillingAgreement(String  token) throws PayPalRESTException, IOException {
        
        
        System.out.println(" executeBillingAgreement  " + token);
        Agreement a = new Agreement();
//        Agreement newAgreement = a.create(apiContext);

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
        
        Agreement executedAgreement = a.execute(apiContext, token);        
        
        System.out.println(" executedAgreement " + Agreement.getLastRequest());
        System.out.println(" executedAgreement " + Agreement.getLastResponse());

        return null;
    }
    
    
    @Override
    public Agreement getBa(String id) throws Exception {
        
        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);
        Agreement a = new Agreement();
        a.setId(id);
        
        Agreement res = a.get(apiContext, id);
        
        System.out.println("res ------------> " + res);
        
       return null; 
    }

    @Override
    public String payWithSavedCard() {// ###CreditCard
        // A resource representing a credit card that can be
        // used to fund a payment.
        CreditCardToken creditCardToken = new CreditCardToken();
        creditCardToken.setCreditCardId("CARD-5BT058015C739554AKE2GCEI");

        // ###Details
        // Let's you specify details of a payment amount.
        Details details = new Details();
        details.setShipping("1");
        details.setSubtotal("5");
        details.setTax("1");

        // ###Amount
        // Let's you specify a payment amount.
        Amount amount = new Amount();
        amount.setCurrency("BRL");
        // Total must be equal to the sum of shipping, tax and subtotal.
        amount.setTotal("7");
        amount.setDetails(details);

        // ###Transaction
        // A transaction defines the contract of a
        // payment - what is the payment for and who
        // is fulfilling it. Transaction is created with
        // a `Payee` and `Amount` types
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction
                .setDescription("This is the payment transaction description.");

        // The Payment creation API requires a list of
        // Transaction; add the created `Transaction`
        // to a List
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        // ###FundingInstrument
        // A resource representing a Payeer's funding instrument.
        // In this case, a Saved Credit Card can be passed to
        // charge the payment.
        FundingInstrument fundingInstrument = new FundingInstrument();
        fundingInstrument.setCreditCardToken(creditCardToken);

        // The Payment creation API requires a list of
        // FundingInstrument; add the created `FundingInstrument`
        // to a List
        List<FundingInstrument> fundingInstrumentList = new ArrayList<FundingInstrument>();
        fundingInstrumentList.add(fundingInstrument);

        // ###Payer
        // A resource representing a Payer that funds a payment
        // Use the List of `FundingInstrument` and the Payment Method
        // as 'credit_card'
        Payer payer = new Payer();
        payer.setFundingInstruments(fundingInstrumentList);
        payer.setPaymentMethod("credit_card");

        // ###Payment
        // A Payment Resource; create one using
        // the above types and intent as 'sale'
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        try {

            // ### Api Context
            // Pass in a `ApiContext` object to authenticate
            // the call and to send a unique request id
            // (that ensures idempotency). The SDK generates
            // a request id if you do not pass one explicitly.
            APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

            // Create a payment by posting to the APIService
            // using a valid AccessToken
            // The return object contains the status;
            Payment createdPayment = payment.create(apiContext);

            System.out.println("Created payment with id = " + createdPayment.getId()
                    + " and status = " + createdPayment.getState());

//			LOGGER.info("Created payment with id = " + createdPayment.getId()
//					+ " and status = " + createdPayment.getState());
//			ResultPrinter.addResult(req, resp, "Payment with Saved Card", Payment.getLastRequest(), Payment.getLastResponse(), null);
        } catch (PayPalRESTException e) {
            System.out.println("REST" + e);
//			ResultPrinter.addResult(req, resp, "Payment with Saved Card", Payment.getLastRequest(), null, e.getMessage());
        }

//		req.getRequestDispatcher("response.jsp").forward(req, resp);
        return null;
    }

    public void createRecuringCCProfile() throws PayPalRESTException, Exception {
            
        
//        ex.setSetExpressCheckoutRequest(null);
        
        
            
        
//            RecurringPaymentsProfileDetailsType profileDetails = new RecurringPaymentsProfileDetailsType("2016-010-03T00:00:00:000Z");
////
//        BasicAmountType paymentAmount = new BasicAmountType(CurrencyCodeType.BRL, "5.0");
//        BillingPeriodType period = BillingPeriodType.fromValue("Day");
//        int frequency = 10;
//        BillingPeriodDetailsType paymentPeriod = new BillingPeriodDetailsType(period, frequency, paymentAmount);
//
//        ScheduleDetailsType scheduleDetails = new ScheduleDetailsType();
//        scheduleDetails.setDescription("recurring billing");
//        scheduleDetails.setPaymentPeriod(paymentPeriod);
////
//        CreditCardDetailsType creditCard = new CreditCardDetailsType();
//        creditCard.setCreditCardNumber("4002350589119162");
//        creditCard.setCVV2("962");
//        creditCard.setExpMonth(9);
//        creditCard.setExpYear(2021);
//        creditCard.setCreditCardType(CreditCardTypeType.fromValue("Visa"));
//
//        CreateRecurringPaymentsProfileRequestDetailsType createRPProfileRequestDetails = new CreateRecurringPaymentsProfileRequestDetailsType(profileDetails, scheduleDetails);
//        createRPProfileRequestDetails.setCreditCard(creditCard);
////
//        CreateRecurringPaymentsProfileRequestType createRPProfileRequest = new CreateRecurringPaymentsProfileRequestType();
//        createRPProfileRequest.setCreateRecurringPaymentsProfileRequestDetails(createRPProfileRequestDetails);
//
//        CreateRecurringPaymentsProfileReq createRPPProfileReq = new CreateRecurringPaymentsProfileReq();
//        createRPPProfileReq.setCreateRecurringPaymentsProfileRequest(createRPProfileRequest);
//
//        Map<String, String> sdkConfig = new HashMap<String, String>();
//        sdkConfig.put("mode", "sandbox");
//        sdkConfig.put("acct1.UserName", "paypal-facilitator_api1.rsantosit.com.br");
//        sdkConfig.put("acct1.Password", "62JH5E69QTWM2NW8");
//        sdkConfig.put("acct1.Signature", "AFcWxV21C7fd0v3bYYYRCpSSRl31ARB8m0FMqPxdKM8lLJfoBE9Z7gWw");
//        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(sdkConfig);
//        CreateRecurringPaymentsProfileResponseType createRPProfileResponse = service.createRecurringPaymentsProfile(createRPPProfileReq);
////        
//        System.out.println(" createRPProfileResponse  " + createRPProfileResponse.getCorrelationID());        
//        System.out.println(" createRPProfileResponse  " + createRPProfileResponse.getAck());        
//        System.out.println(" createRPProfileResponse  " + createRPProfileResponse.getBuild());        
//        //        System.out.println(" createRPProfileResponse  " + createRPProfileResponse);        
        //GET ACCESS TOKEN 
//        Map<String, String> sdkConfig = new HashMap<String, String>();
//        sdkConfig.put("mode", "sandbox");
//
//        String accessToken = new OAuthTokenCredential(APIConstants.clientId, APIConstants.secretId, sdkConfig).getAccessToken();
//        
//        System.out.println("accessToken ------------->" +  accessToken);
        PaymentExecution paymentExecution = new PaymentExecution();

        try {

//            PayRequest payRequest = new PayRequest();
//
//            List<Receiver> receivers = new ArrayList<Receiver>();
//            Receiver receiver = new Receiver();
//            receiver.setAmount(150D);
//            receiver.setEmail("paypal-facilitator@rsantosit.com.br");
//            receivers.add(receiver);
//            ReceiverList receiverList = new ReceiverList(receivers);
//            payRequest.setSenderEmail("paypal2-buyer@rsantosit.com.br");
//
//            SenderIdentifier identifier = new SenderIdentifier();
//
//            TaxIdDetails details = new TaxIdDetails();
//            details.setTaxId("30949017787");
//            details.setTaxIdType("BR_CPF");
//            identifier.setTaxIdDetails(details);
//
//            payRequest.setSender(identifier);
////            payRequest.setClientDetails(null);
//
//            payRequest.setSender(null);
//            payRequest.setReceiverList(receiverList);
//
//            RequestEnvelope requestEnvelope = new RequestEnvelope("en_US");
//            payRequest.setRequestEnvelope(requestEnvelope);
//            payRequest.setActionType("PAY");
//            payRequest.setCancelUrl("https://devtools-paypal.com/guide/ap_implicit_payment?cancel=true");
//            payRequest.setReturnUrl("https://devtools-paypal.com/guide/ap_implicit_payment?success=true");
//            payRequest.setCurrencyCode("BRL");
//            payRequest.setIpnNotificationUrl("http://replaceIpnUrl.com");
//
//            Map<String, String> sdkConfigs = new HashMap<String, String>();
//            sdkConfigs.put("mode", "sandbox");
//            sdkConfigs.put("acct1.UserName", "paypal-facilitator_api1.rsantosit.com.br");
//            sdkConfigs.put("acct1.Password", "62JH5E69QTWM2NW8");
//            sdkConfigs.put("acct1.Signature", "AFcWxV21C7fd0v3bYYYRCpSSRl31ARB8m0FMqPxdKM8lLJfoBE9Z7gWw");
//            sdkConfigs.put("acct1.AppId", "APP-80W284485P519543T");
//
//            AdaptivePaymentsService adaptivePaymentsService = new AdaptivePaymentsService(sdkConfigs);
//            PayResponse payResponse = adaptivePaymentsService.pay(payRequest);
//
//            System.out.println(" + getPayKey ----------------->" + payResponse.getPayKey());
//            System.out.println(" + getPaymentExecStatus ----------------->" + payResponse.getPaymentExecStatus());
//            System.out.println(" + getDefaultFundingPlan ----------------->" + payResponse.getDefaultFundingPlan());
//            System.out.println(" + getResponseEnvelope ----------------->" + payResponse.getResponseEnvelope());
//
//            RequestEnvelope requestEnvelopes = new RequestEnvelope("en_US");
//            PaymentDetailsRequest paymentDetailsRequest = new PaymentDetailsRequest(requestEnvelopes);
//            paymentDetailsRequest.setPayKey(payResponse.getPayKey());
//
////        Map<String, String> sdkConfig = new HashMap<String, String>();
////        sdkConfig.put("mode", "sandbox");
////        sdkConfig.put("acct1.UserName", "paypal-facilitator_api1.rsantosit.com.br");
////        sdkConfig.put("acct1.Password", "62JH5E69QTWM2NW8");
////        sdkConfig.put("acct1.Signature","AFcWxV21C7fd0v3bYYYRCpSSRl31ARB8m0FMqPxdKM8lLJfoBE9Z7gWw");
////        sdkConfig.put("acct1.AppId","APP-80W284485P519543T");
//            AdaptivePaymentsService adaptivePaymentsServices = new AdaptivePaymentsService(sdkConfig);
//            PaymentDetailsResponse paymentDetailsResponse = adaptivePaymentsServices.paymentDetails(paymentDetailsRequest);
//
//            System.out.println(" + paymentDetailsResponse ----------------->" + paymentDetailsResponse.getStatus());

//            ObjectMapper mapperObj = new ObjectMapper();
////            createdPayment = createdPayment.execute(apiContext, paymentExecution);
//            System.out.println("Executed The Payment" + Payment.getLastRequest());
//            System.out.println("Executed The Payment" + Payment.getLastResponse());
//            System.out.println("Executed The Payment");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    

    public String one() throws Exception {
        
        //STEP 1 : 
        
        PaymentDetailsType paymentDetails = new PaymentDetailsType();
        paymentDetails.setPaymentAction(PaymentActionCodeType.AUTHORIZATION);

        BasicAmountType orderTotal = new BasicAmountType();
        orderTotal.setCurrencyID(CurrencyCodeType.fromValue("BRL"));
        orderTotal.setValue("150");
        paymentDetails.setOrderTotal(orderTotal);
        List<PaymentDetailsType> paymentDetailsList = new ArrayList<PaymentDetailsType>();
        paymentDetailsList.add(paymentDetails);

        SetExpressCheckoutRequestDetailsType setExpressCheckoutRequestDetails = new SetExpressCheckoutRequestDetailsType();
        setExpressCheckoutRequestDetails.setReturnURL("https://devtools-paypal.com/guide/recurring_payment_ec?success=true");
        setExpressCheckoutRequestDetails.setCancelURL("https://devtools-paypal.com/guide/recurring_payment_ec?cancel=true");

        setExpressCheckoutRequestDetails.setPaymentDetails(paymentDetailsList);

        BillingAgreementDetailsType billingAgreement = new BillingAgreementDetailsType(BillingCodeType.fromValue("RecurringPayments"));
        billingAgreement.setBillingAgreementDescription("recurringbilling");
        billingAgreement.setBillingType(BillingCodeType.MERCHANTINITIATEDBILLINGSINGLEAGREEMENT);
        List<BillingAgreementDetailsType> billList = new ArrayList<BillingAgreementDetailsType>();
        billList.add(billingAgreement);
        setExpressCheckoutRequestDetails.setBillingAgreementDetails(billList);

        SetExpressCheckoutRequestType setExpressCheckoutRequest = new SetExpressCheckoutRequestType(setExpressCheckoutRequestDetails);
        setExpressCheckoutRequest.setVersion("104.0");

        SetExpressCheckoutReq setExpressCheckoutReq = new SetExpressCheckoutReq();
        setExpressCheckoutReq.setSetExpressCheckoutRequest(setExpressCheckoutRequest);

        Map<String, String> sdkConfig = new HashMap<String, String>();
        sdkConfig.put("mode","sandbox");
        sdkConfig.put("acct1.UserName","paypal-facilitator_api1.rsantosit.com.br");
        sdkConfig.put("acct1.Password","62JH5E69QTWM2NW8");
        sdkConfig.put("acct1.Signature","AFcWxV21C7fd0v3bYYYRCpSSRl31ARB8m0FMqPxdKM8lLJfoBE9Z7gWw");
        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(sdkConfig);
        SetExpressCheckoutResponseType setExpressCheckoutResponse = service.setExpressCheckout(setExpressCheckoutReq);
        System.out.println("getBuild  " + setExpressCheckoutResponse.getBuild());        
        System.out.println("getCorrelationID  " + setExpressCheckoutResponse.getCorrelationID());        
        System.out.println("getToken  " + setExpressCheckoutResponse.getToken());        
        System.out.println("getAck  " + setExpressCheckoutResponse.getAck());        
        System.out.println("getErrors  " + setExpressCheckoutResponse.getErrors());        
        System.out.println("getErrors  " + setExpressCheckoutResponse);        
//        System.out.println("setExpressCheckoutResponse  " + setExpressCheckoutResponse.getErrors().size());        
//        System.out.println("setExpressCheckoutResponse  " + setExpressCheckoutResponse.getErrors().get(0).getLongMessage());        
        
        //STEP 2 : 
        //Buyer need to approve
        //"https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" +  setExpressCheckoutResponse.getToken()

        
        return  setExpressCheckoutResponse.getToken();
        
//        return null;
        
    }
    
    @Override
    public void two() throws Exception {
        
        
        //STEP 3 : 
        
            CreateBillingAgreementReq agreement = new CreateBillingAgreementReq();
//        
            CreateBillingAgreementRequestType agreementRequestType = new CreateBillingAgreementRequestType();
            
            agreementRequestType.setToken("EC-33W60358947215031");
            agreementRequestType.setVersion("106");
            agreement.setCreateBillingAgreementRequest(agreementRequestType);

            Map<String, String> sdkConfig = new HashMap<String, String>();
            sdkConfig.put("mode","sandbox");
            sdkConfig.put("acct1.UserName","paypal-facilitator_api1.rsantosit.com.br");
            sdkConfig.put("acct1.Password","62JH5E69QTWM2NW8");
            sdkConfig.put("acct1.Signature","AFcWxV21C7fd0v3bYYYRCpSSRl31ARB8m0FMqPxdKM8lLJfoBE9Z7gWw");

            PayPalAPIInterfaceServiceService service1 = new PayPalAPIInterfaceServiceService(sdkConfig);
    //        
        CreateBillingAgreementResponseType res = service1.createBillingAgreement(agreement);
            System.out.println("res ---------------> " + res.getBillingAgreementID());
//            System.out.println("res ---------------> " + res);
            
        
        
        
        
             //STEP 4 : 
//            
            DoReferenceTransactionReq doReferenceTransactionReq = new DoReferenceTransactionReq();
            
            DoReferenceTransactionRequestType doReferenceTransactionRequestType = new DoReferenceTransactionRequestType();
            
            
            DoReferenceTransactionRequestDetailsType detailsType = new DoReferenceTransactionRequestDetailsType();
            
            
            detailsType.setPaymentAction(PaymentActionCodeType.SALE);
            
            
            PaymentDetailsType paymentDetails = new PaymentDetailsType();
//                paymentDetails.setPaymentAction(PaymentActionCodeType.AUTHORIZATION);

            BasicAmountType orderTotal = new BasicAmountType();
            orderTotal.setCurrencyID(CurrencyCodeType.BRL);
            orderTotal.setValue("160"); 
            paymentDetails.setOrderTotal(orderTotal);
//                List<PaymentDetailsType> paymentDetailsList = new ArrayList<PaymentDetailsType>();
//                paymentDetailsList.add(paymentDetails);
            
            
            detailsType.setPaymentDetails(paymentDetails);
            
            //Billing id
            detailsType.setReferenceID("B-1ED47630AV7006645");
            
            
            doReferenceTransactionRequestType.setDoReferenceTransactionRequestDetails(detailsType);
            
            
            doReferenceTransactionReq.setDoReferenceTransactionRequest(doReferenceTransactionRequestType);
            
            
            DoReferenceTransactionResponseType doReferenceTransactionResponseType = service1.doReferenceTransaction(doReferenceTransactionReq);
//            
//            System.out.println("doReferenceTransactionResponseType" + doReferenceTransactionResponseType.getAck());
//            System.out.println("doReferenceTransactionResponseType" + doReferenceTransactionResponseType.getFMFDetails());
//            
            
    }

}
