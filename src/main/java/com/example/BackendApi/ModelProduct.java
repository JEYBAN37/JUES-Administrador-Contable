package com.example.BackendApi;

import java.util.Date;

public class ModelProduct {
    private String type;
    private String nameClothe;
    private String sizeClothe;
    private double value;
    private double id;
    private String buyer;
    private Date date;
    private int box;

    public int getBox() {
        return box;
    }

    public void setBox(int box) {
        this.box = box;
    }

    public String getBuyer() {
        return buyer;
    }

    public void setBuyer(String buyer) {
        this.buyer = buyer;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getId() {
        return id;
    }

    public void setId(double id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNameClothe() {
        return nameClothe;
    }

    public void setNameClothe(String nameClothe) {
        this.nameClothe = nameClothe;
    }

    public String getSizeClothe() {
        return sizeClothe;
    }

    public void setSizeClothe(String sizeClothe) {
        this.sizeClothe = sizeClothe;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public String getType() {
        return type;
    }

    public ModelProduct() {

    }
}
