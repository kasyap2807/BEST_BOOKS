package com.Server.Server.model;

public class updaterating {
    private int id;
    private int no_stars;
    private int no_ratings;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getNo_stars() {
        return no_stars;
    }
    public void setNo_stars(int no_stars) {
        this.no_stars = no_stars;
    }
    public int getNo_ratings() {
        return no_ratings;
    }
    public void setNo_ratings(int no_ratings) {
        this.no_ratings = no_ratings;
    }
    public updaterating(int id, int no_stars, int no_ratings) {
        this.id = id;
        this.no_stars = no_stars;
        this.no_ratings = no_ratings;
    }

    
}
