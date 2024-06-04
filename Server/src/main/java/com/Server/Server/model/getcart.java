package com.Server.Server.model;

public class getcart {
    private int id;
    public String cart;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public getcart(int id, String cart) {
        this.id = id;
        this.cart = cart;
    }

    public String getCart() {
        return cart;
    }

    public void setCart(String cart) {
        this.cart = cart;
    }
    
    

    public getcart() {
    }


    
}
