/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mkyong.helloworld.service;

import com.paypal.api.payments.Amount;
import com.paypal.api.payments.Details;
import com.paypal.api.payments.Item;
import com.paypal.api.payments.ItemList;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payer;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.api.payments.PaymentInstruction;
import com.paypal.api.payments.PaymentOptions;
import com.paypal.api.payments.RedirectUrls;
import com.paypal.api.payments.Transaction;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.stereotype.Service;

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
        // Total must be equal to sum of shipping, tax and subtotal.
        amount.setTotal("7");
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
        item.setName("For VM creation").setQuantity("1").setCurrency("BRL").setPrice("5");
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

        // ###Redirect URLs
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

    public String getPayment(String paymentId, String token) throws Exception {

        APIContext apiContext = new APIContext(APIConstants.clientId, APIConstants.secretId, APIConstants.mode);

        Payment createdPayment = Payment.get(apiContext, paymentId);

        System.out.println("createdPayment " + createdPayment.getIntent());
        System.out.println("createdPayment " + createdPayment.getState());
        System.out.println("createdPayment " + createdPayment.getPayer());

        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(createdPayment.getPayer().getPayerInfo().getPayerId());
        try {
            createdPayment = createdPayment.execute(apiContext, paymentExecution);
//            System.out.println("Executed The Payment" + Payment.getLastRequest());
            System.out.println("Executed The Payment" );
            
        } catch (Exception e) {
            e.printStackTrace();
        }

//        payment.
//        
        return null;
    }
}
