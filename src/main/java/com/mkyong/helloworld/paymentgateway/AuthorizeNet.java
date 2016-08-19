package com.mkyong.helloworld.paymentgateway;

import java.util.Properties;
import com.paypal.base.rest.APIContext;
//import net.authorize.Environment;
//import net.authorize.Merchant;

/**
 *
 * @author Nandhini
 */
public class AuthorizeNet implements PaymentGateway {

//    private Merchant merchant;
    public AuthorizeNet(Properties config) throws Exception {
//        String apiLoginID = config.getProperty("api.loginId");
//        // API transaction key
//        String transactionKey = config.getProperty("TRANSACTION_KEY");
//        // merchant defined MD5 Hash key
//        String merchantMD5Key = "MD5_HASH_KEY";
//        Environment environement = Environment.SANDBOX;
//        if (config.getProperty("api.environment").equals("PRODUCTION")) {
//            environement = Environment.PRODUCTION;
//        }
//
//        // create the merchant
        //merchant = Merchant.createMerchant(environement, apiLoginID, transactionKey);
//        merchant = Merchant.createMerchant(Environment.SANDBOX, "48u4f4VHM5Vq", "84mUTk595ntJ3r6g");
    }

    @Override
    public APIContext getAPIContext(String clientId, String secretId, String mode) throws Exception {
        try {
            return new APIContext(clientId, secretId, mode);
        } catch (Exception ex) {
            throw new Exception();
        }
    }

    @Override
    public CreditCard addCreditCard(CreditCard card) throws Exception {
        //net.authorize.data.cim.CustomerProfile profile = new net.authorize.data.cim.CustomerProfile.createProfile();
        // profile.addCard
        return card;
    }

    @Override
    public Properties updateCreditCard(CreditCard card) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Properties removeCreditCard(String uniqueIdentifier) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Transaction processPayment(CreditCard card, Transaction transaction) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Transaction processPayment(Transaction transaction) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
