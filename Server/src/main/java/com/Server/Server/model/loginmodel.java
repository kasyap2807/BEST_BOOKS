package com.Server.Server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class loginmodel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uerid;

    @Column(name="name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "password")
    private String password;

    @Column(name = "address")
    private String address;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "phonenumber")
    private String phonenumber;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name = "cart")
    private String cart;

    @Column(name = "orders")
    private String orders;

    public int getUerid() {
        return uerid;
    }

    public void setUerid(int uerid) {
        this.uerid = uerid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getOrders() {
        return orders;
    }

    public void setOrders(String orders) {
        this.orders = orders;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public loginmodel(int uerid, String name, String lastname, String password, String address, String pincode,
            String phonenumber, String email, String cart, String orders) {
        this.uerid = uerid;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.address = address;
        this.pincode = pincode;
        this.phonenumber = phonenumber;
        this.email = email;
        this.cart = cart;
        this.orders = orders;
    }

    public loginmodel() {
    }
    
    
}
