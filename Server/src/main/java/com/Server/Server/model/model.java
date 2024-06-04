package com.Server.Server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookdet")
public class model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "Quntity")
    private long Quntity;

    @Column(name = "no_stars")
    private long no_stars;

    @Column(name =  "no_ratings")
    private long no_ratings;

    @Column(name = "comments")
    private String comments;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getQuntity() {
        return Quntity;
    }

    public void setQuntity(long quntity) {
        Quntity = quntity;
    }

    public long getNo_stars() {
        return no_stars;
    }

    public void setNo_stars(long no_stars) {
        this.no_stars = no_stars;
    }

    public long getNo_ratings() {
        return no_ratings;
    }

    public void setNo_ratings(long no_ratings) {
        this.no_ratings = no_ratings;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public model(int id, long quntity, long no_stars, long no_ratings, String comments) {
        this.id = id;
        this.Quntity = quntity;
        this.no_stars = no_stars;
        this.no_ratings = no_ratings;
        this.comments = comments;
    }

    public model() {
    }

    

    


}
