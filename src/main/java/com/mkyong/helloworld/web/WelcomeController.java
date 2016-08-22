package com.mkyong.helloworld.web;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.mkyong.helloworld.service.HelloWorldService;
import com.mkyong.helloworld.service.PaymentService;

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
            String approval_url = paymentService.pay();
            logger.info("AFTYER PAY ");
            model.put("approval_url", approval_url);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        logger.debug("index() is executed!");

        model.put("title", helloWorldService.getTitle(""));

        model.put("msg", helloWorldService.getDesc());

        return "index";
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
    public String succes(Map<String, Object> model) {

        logger.debug("success is executed!");

        model.put("msg", "success");

        return "success";
    }

    @RequestMapping(value = "/cancel", method = RequestMethod.GET)
    public String cancel(Map<String, Object> model) {

        logger.debug("success is executed!");

        model.put("msg", "cancel");

        return "cancel";
    }
}
