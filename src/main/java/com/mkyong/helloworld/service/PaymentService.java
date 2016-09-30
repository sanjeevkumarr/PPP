/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mkyong.helloworld.service;

import com.mkyong.helloworld.paymentgateway.Paypal;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.Plan;
import com.paypal.api.payments.WebProfile;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;


/**
 *
 * @author U43721
 */
@Service
public interface PaymentService {
    
    public Payment pay() throws Exception;
    
    public String getPayment(String paymentId, String token) throws Exception  ;

    public Payment createCreditCardPayment() throws Exception ;
    
    public WebProfile createExperienceProfile(String profileName ) throws Exception;
    
    public  WebProfile getWebProfileById(String profileId) throws PayPalRESTException;
    
    public List<WebProfile> getAllWebProfile() throws PayPalRESTException ;    
    
    public Map<String, Object>  embeddedPayment(Map<String, Object> model) throws Exception;
    
    
    public String doDirectPayment() throws Exception ;
    
    public Plan create(APIContext context) throws PayPalRESTException, IOException ;
    
    public Plan udpatePlan(String id) throws PayPalRESTException, IOException;

    public Plan getPlan(String planId)throws PayPalRESTException, IOException;
}
