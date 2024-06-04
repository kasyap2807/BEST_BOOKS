package com.Server.Server.model;

public class Commentupdate {
    
    private static String Comment;
    private static int id;
    public String getComment() {
        return Comment;
    }
    public void setComment(String comment) {
        Comment = comment;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Commentupdate(String comment, int id) {
        this.Comment = comment;
        this.id = id;
    }    

}
