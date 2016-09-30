/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mkyong.helloworld.service;

import com.mkyong.helloworld.paymentgateway.Paypal;
import com.paypal.api.payments.Amount;
import com.paypal.api.payments.ChargeModels;
import com.paypal.api.payments.CreateProfileResponse;
import com.paypal.api.payments.CreditCard;
import com.paypal.api.payments.CreateProfileResponse;
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
import com.paypal.base.rest.PayPalModel;
import com.paypal.base.rest.PayPalRESTException;
import com.paypal.svcs.services.AdaptivePaymentsService;
import com.paypal.svcs.types.ap.PayRequest;
import com.paypal.svcs.types.ap.PayResponse;
import com.paypal.svcs.types.ap.Receiver;
import com.paypal.svcs.types.ap.ReceiverList;
import com.paypal.svcs.types.common.RequestEnvelope;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Service;
import urn.ebay.api.PayPalAPI.DoDirectPaymentReq;
import urn.ebay.api.PayPalAPI.DoDirectPaymentRequestType;
import urn.ebay.api.PayPalAPI.DoDirectPaymentResponseType;
import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;
import urn.ebay.apis.CoreComponentTypes.BasicAmountType;
import urn.ebay.apis.eBLBaseComponents.AddressType;
import urn.ebay.apis.eBLBaseComponents.CountryCodeType;
import urn.ebay.apis.eBLBaseComponents.CreditCardDetailsType;
import urn.ebay.apis.eBLBaseComponents.CreditCardTypeType;
import urn.ebay.apis.eBLBaseComponents.CurrencyCodeType;
import urn.ebay.apis.eBLBaseComponents.DoDirectPaymentRequestDetailsType;
import urn.ebay.apis.eBLBaseComponents.PayerInfoType;
import urn.ebay.apis.eBLBaseComponents.PaymentActionCodeType;
import urn.ebay.apis.eBLBaseComponents.PaymentDetailsType;
import urn.ebay.apis.eBLBaseComponents.PersonNameType;

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
        shipTo.setName("personalbr" + " " + "personalbr");
        shipTo.setStreet1("1234 Main Street");
        shipTo.setCityName("Rio De Janeiro");
        shipTo.setStateOrProvince("RL");
        shipTo.setCountry(CountryCodeType.fromValue("BR"));
        shipTo.setPostalCode("22021-001");
        paymentDetails.setShipToAddress(shipTo);

        //Get credit card details.
        CreditCardDetailsType cardDetails = new CreditCardDetailsType();
        cardDetails.setCreditCardType(CreditCardTypeType.fromValue("MasterCard"));
        cardDetails.setCreditCardNumber("5229784639382079");
        cardDetails.setExpMonth(Integer.parseInt("09"));
        cardDetails.setExpYear(Integer.parseInt("2021"));
        cardDetails.setCVV2("123");

        //Payer info.
        PayerInfoType payer = new PayerInfoType();
        PersonNameType name = new PersonNameType();
        name.setFirstName("personalbr");
        name.setLastName("personalbr");
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
        definition.setFrequency("MONTH");
        definition.setFrequencyInterval("2");
        definition.setCycles("12");
        Currency currency = new Currency();
        currency.setCurrency("BRL");
        currency.setValue("100");
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
        mp.setCancelUrl("http://localhost:8080/spring4/cancel");
        mp.setReturnUrl("http://localhost:8080/spring4/success");
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
        
        map.put("state", "ACTIVE");
        
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
        
        System.out.println("plan details -------------> " + res);
        
        return null;
    }

}
