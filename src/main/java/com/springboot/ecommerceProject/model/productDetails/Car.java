package com.springboot.ecommerceProject.model.productDetails;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.Category;
//import com.springboot.ecommerceProject.model.Product;
import com.springboot.ecommerceProject.model.User;
import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "T_CAR")
public class Car extends AbstractEntity {

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private String price;

    @Column(name = "address")
    private String address;

    @Column(name = "explanation")
    private String explanation;

    @Column(name = "create_date")
    private Date createDate;

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
/*
    @OneToOne(mappedBy = "car")
    private Product product;
*/
    @ManyToOne
    @RestResource(exported = false)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @RestResource(exported = false)
    @JoinColumn(name = "user_id")
    private User user;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getExplanation() {
        return explanation;
    }
    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public Date getCreateDate() {
        return createDate;
    }
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

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
/*
    @JsonIgnore
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
*/
    @Transient
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }

    @Transient
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
