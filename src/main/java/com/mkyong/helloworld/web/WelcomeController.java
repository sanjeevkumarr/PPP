package com.mkyong.helloworld.web;

import com.mkyong.helloworld.service.HelloWorldService;
import com.mkyong.helloworld.service.PaymentService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import java.util.Iterator;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.Map;


@Controller
public class WelcomeController {

    @Autowired
    PaymentService paymentService;

    private final Logger logger = LoggerFactory.getLogger(WelcomeController.class);
    private final HelloWorldService helloWorldService;

    @Autowired
    public WelcomeController(HelloWorldService helloWorldService) {
        this.helloWorldService = helloWorldService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Map<String, Object> model) {
        try {
            logger.info("BEFORE PAY ");
            Payment createdPayment = paymentService.pay();
                   
            model.put("createdPayment", createdPayment);
            
            Iterator<Links> links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = links.next();
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    String approval_url = link.getHref();
                    model.put("approval_url", approval_url);
                    System.out.println(" ******************************approval_url****************************** ");
                    System.out.println(" approval_url " + link.getHref());
                    System.out.println(" ******************************approval_url****************************** ");
                } else if (link.getRel().equalsIgnoreCase("self")) {
                    model.put("token", link.getHref());
                }
            }
            model.put("token", createdPayment);
            logger.info("AFTYER PAY ");

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        logger.debug("index() is executed!");

        model.put("title", helloWorldService.getTitle(""));

        model.put("msg", helloWorldService.getDesc());

        return "index";
    }


    @RequestMapping(value = "/credit", method = RequestMethod.GET)
    public String creditCard(Map<String, Object> model) {
        try {
            logger.info("BEFORE PAY ");
            Payment createdPayment = paymentService.createCreditCardPayment();

            Iterator<Links> links = createdPayment.getLinks().iterator();


            while (links.hasNext()) {
                Links link = links.next();
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    String approval_url = link.getHref();
                    model.put("approval_url", approval_url);
                    System.out.println(" ******************************approval_url****************************** ");
                    System.out.println(" approval_url " + link.getHref());
                    System.out.println(" ******************************approval_url****************************** ");
                } else if (link.getRel().equalsIgnoreCase("self")) {
                    model.put("token", link.getHref());
                }
            }

            model.put("token", createdPayment);
            logger.info("AFTYER PAY ");

        } catch (Exception ex) {

            ex.printStackTrace();

            return "cancel";
        }

        logger.debug("index() is executed!");

        model.put("title", helloWorldService.getTitle(""));

        model.put("msg", helloWorldService.getDesc());

        return "success";
    }




    @RequestMapping(value = "/hello/{name:.+}", method = RequestMethod.GET)
    public ModelAndView hello(@PathVariable("name") String name) {

        logger.debug("hello() is executed - $name {}", name);

        ModelAndView model = new ModelAndView();
        model.setViewName("index");

        model.addObject("title", helloWorldService.getTitle(name));
        model.addObject("msg", helloWorldService.getDesc());

        return model;
    }


    @RequestMapping(value = "/success", method = RequestMethod.GET)
    public String succes(@RequestParam("token") String token, Map<String, Object> model) {

        logger.debug("success is executed!" );

//        System.out.println(paymentId);
        System.out.println(token);
        try {
//            paymentService.getPayment(paymentId, token);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        model.put("msg", "success");

        return "success";
    }

    @RequestMapping(value = "/cancel", method = RequestMethod.GET)
    public String cancel(Map<String, Object> model) {

        logger.debug("success is executed!");

        model.put("msg", "cancel");

        return "cancel";
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public String experienceProfile(Map<String, Object> model) {

        try {
            model.put("allProfiles", paymentService.getAllWebProfile());
            model.put("newProfile", paymentService.createExperienceProfile("ONDA_BR"));
            model.put("latestProfiles", paymentService.getAllWebProfile());

        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "profile";
    }

    @RequestMapping(value = "/embedded", method = RequestMethod.GET)
    public String embeded(Map<String, Object> model, HttpServletRequest request,
            HttpServletResponse response) {
        
        try {
////            model = paymentService.embeddedPayment(model);
//            
//            System.out.println("(String) model.get(\"URL\")  " + (String) model.get("URL"));
//            
//            model.put("approval_url", (String) model.get("URL"));
            
            paymentService.doDirectPayment();
            
        } catch (Exception ex) {
            ex.printStackTrace();
            return "error";
        }
        
        return "embed";
    }
    
    
      @RequestMapping(value = "/plan", method = RequestMethod.GET)
    public String createPlan(Map<String, Object> model) {

        try {
            model.put("allProfiles",paymentService.create(null));            
            

        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
       @RequestMapping(value = "/updatePlan", method = RequestMethod.GET)
    public String updatePlan(@RequestParam("planId") String planId, Map<String, Object> model) {

        try {
            
            model.put("allProfiles",paymentService.udpatePlan(planId));                        
            
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    
    @RequestMapping(value = "/getPlan", method = RequestMethod.GET)
    public String getPlan(@RequestParam("planId") String planId, Map<String, Object> model) {

        try {
            
//            model.put("allProfiles",paymentService.getPlan(planId));                        
            
            paymentService.getPlan(planId);
            
            
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    
    @RequestMapping(value = "/executeCard", method = RequestMethod.GET)
    public String executeCard(Map<String, Object> model) {

        try {
            
            model.put("allProfiles",paymentService.payWithSavedCard());                        
            
//            paymentService.createBillingAgreement();
            
            
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
     @RequestMapping(value = "/recurProfile", method = RequestMethod.GET)
    public String recurCard(Map<String, Object> model) throws Exception {

        try {            
             paymentService.createRecuringCCProfile();                                                
             
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    
    
     @RequestMapping(value = "/one", method = RequestMethod.GET)
    public String one(Map<String, Object> model) throws Exception {

        try {            
             paymentService.one();                                                 
             
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    
    
    @RequestMapping(value = "/cba", method = RequestMethod.GET)
    public String createBillingAgreement(Map<String, Object> model) throws Exception {
        
        try {                        
             paymentService.createBillingAgreement();
             
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    @RequestMapping(value = "/approve", method = RequestMethod.GET)
    public String approve(@RequestParam("token") String token, Map<String, Object> model) throws Exception {

        try {            
            
             System.out.println("token" + token );
             
             paymentService.executeBillingAgreement(token);
             
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
    
    @RequestMapping(value = "/getcba", method = RequestMethod.GET)
    public String getBa(Map<String, Object> model, @RequestParam("id") String id) throws Exception {
        
        try {                        
             paymentService.getBa(id);
             
        } catch (Exception ex) {

            ex.printStackTrace();

            return "error";
        }

        return "success";
    }
    
}
