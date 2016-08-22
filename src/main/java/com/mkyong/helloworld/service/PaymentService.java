/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mkyong.helloworld.service;

import com.mkyong.helloworld.paymentgateway.Paypal;
import org.springframework.stereotype.Service;


/**
 *
 * @author U43721
 */
@Service
public interface PaymentService {
    
    public String pay() throws Exception;
    
}
