package com.springboot.ecommerceProject.model.productDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.Product;
import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "T_CAR")
public class Car extends AbstractEntity {

    @Column(name = "mark")
    private String mark;

    @Column(name = "model")
    private String model;

    @Column(name = "year")
    private String year;

    @Column(name = "fuel")
    private String fuel;

    @Column(name = "gear")
    private String gear;

    @Column(name = "km")
    private String km;

    @Column(name = "color")
    private String color;

    @Column(name = "license_plate")
    private String licensePlate;

    @Column(name = "owner")
    private String owner;

    @OneToOne(mappedBy = "car")
    private Product product;


    public String getMark() {
        return mark;
    }
    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }

    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }

    public String getFuel() {
        return fuel;
    }
    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getGear() {
        return gear;
    }
    public void setGear(String gear) {
        this.gear = gear;
    }

    public String getKm() {
        return km;
    }
    public void setKm(String km) {
        this.km = km;
    }

    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }

    public String getLicensePlate() {
        return licensePlate;
    }
    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner) {
        this.owner = owner;
    }

    @JsonIgnore
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
}
