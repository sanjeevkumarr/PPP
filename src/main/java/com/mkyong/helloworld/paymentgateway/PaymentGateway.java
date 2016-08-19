/*
 * The common payment gateway interface
 * Abstract idea of any payment gateway implementations for FogPanel
 * 
 */
package com.mkyong.helloworld.paymentgateway;

import java.util.Properties;
import com.paypal.base.rest.APIContext;

/**
 *
 * @author nandhini
 */
public interface PaymentGateway {
    
    /**
     * Adds the provided card to the Vault and returns the card information from the vault
     * 
     * @param card
     * @return
     * @throws Exception 
     */
    CreditCard addCreditCard(CreditCard card) throws Exception;
    
    Properties updateCreditCard(CreditCard card) throws Exception;
    
    Properties removeCreditCard(String uniqueIdentifier) throws Exception;
    
    Transaction processPayment(CreditCard card, Transaction transaction) throws Exception;
        
    Transaction processPayment(Transaction transaction) throws Exception;
    
    APIContext getAPIContext( String clientId, String secretId, String mode) throws Exception;
}
