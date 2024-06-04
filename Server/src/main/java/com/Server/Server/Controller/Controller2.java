package com.Server.Server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Server.Server.Repository.loginrepo;
import com.Server.Server.Repository.orderepo;
import com.Server.Server.model.getcart;
import com.Server.Server.model.login;
import com.Server.Server.model.loginmodel;
import com.Server.Server.model.orderdata;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping
public class Controller2 {
    @Autowired
    private loginrepo loginrepo;

    @Autowired
    private orderepo orderepo;

    @PostMapping("/signup")
    public String signup(@RequestBody loginmodel loginmodel){
        try {
            loginrepo.signup(loginmodel.getName(), loginmodel.getLastname(), loginmodel.getPassword(), loginmodel.getPhonenumber(), loginmodel.getEmail());
            return "Success";
            
        } catch (Exception e) {
            return "failed";
        }
    }

    @PutMapping("/login")
    public loginmodel login(@RequestBody login login){
        try {
            return loginrepo.login(login.getEmail(),login.getPassword());
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping("/getcart")
    public String getcart(@RequestBody getcart getcart){
        try {
            return (loginrepo.getcart(getcart.getId())).getCart();
        } catch (Exception e) {
            return null;
        }
    }
    
    @PostMapping("/updateUser")
    public loginmodel updateUser(@RequestBody loginmodel loginmodel){
            loginrepo.updateuser(loginmodel.getUerid(), loginmodel.getName(), loginmodel.getPassword(), loginmodel.getAddress(), loginmodel.getPincode());
            return loginrepo.login(loginmodel.getEmail(),loginmodel.getPassword());
    }

    @PutMapping("/setcart")
    public String setcart(@RequestBody getcart getcart){
        try {
            loginrepo.setcart(getcart.getCart(), getcart.getId());
            return "success";
        } catch (Exception e) {
            return "failed";
        }
    }

    @PostMapping("/orderplace")
    public String placeorder(@RequestBody orderdata orderdata){
        try {
            orderepo.save(orderdata);
            loginrepo.clearcart(orderdata.getUserid());

            return "success";
            
        } catch (Exception e) {
           return "fails";
        }
    }


}

