package com.Server.Server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderdata")
public class orderdata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderid;

    @Column(name = "userid")
    private int userid;

    @Column(name="name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "phonenumber")
    private String phonenumber;

    @Column(name = "email")
    private String email;

    @Column(name = "cart")
    private String cart;

    @Column(name = "Pstatus")
    private String Pstatus;

    @Column(name = "Dstatus")
    private String Dstatus;

    @Column(name = "totalcost")
    private int totalcost;

    public int getOrder_id() {
        return orderid;
    }

    public void setOrder_id(int order_id) {
        this.orderid = order_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCart() {
        return cart;
    }

    public void setCart(String cart) {
        this.cart = cart;
    }

    public String getPstatus() {
        return Pstatus;
    }

    public void setPstatus(String pstatus) {
        Pstatus = pstatus;
    }

    public String getDstatus() {
        return Dstatus;
    }

    public void setDstatus(String dstatus) {
        Dstatus = dstatus;
    }

    
    public orderdata(int userid) {
        this.userid = userid;
    }

    

    public orderdata(int orderid, int userid, String name, String address, String pincode, String phonenumber, String email,
            String cart, String pstatus, String dstatus, int totalcost) {
        this.orderid = orderid;
        this.userid = userid;
        this.name = name;
        this.address = address;
        this.pincode = pincode;
        this.phonenumber = phonenumber;
        this.email = email;
        this.cart = cart;
        this.Pstatus = pstatus;
        this.Dstatus = dstatus;
        this.totalcost = totalcost;
    }

    public orderdata() {
    }

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getTotalcost() {
        return totalcost;
    }

    public void setTotalcost(int totalcost) {
        this.totalcost = totalcost;
    } 


}
