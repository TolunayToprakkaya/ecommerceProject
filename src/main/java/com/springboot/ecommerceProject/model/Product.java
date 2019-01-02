/*
package com.springboot.ecommerceProject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.productDetails.Car;
import com.springboot.ecommerceProject.model.productDetails.Estate;
import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "T_PRODUCT")
public class Product extends AbstractEntity {

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

    @ManyToOne
    @RestResource(exported = false)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @RestResource(exported = false)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @RestResource(exported = false)
    @JoinColumn(name = "car_id", nullable = true)
    private Car car;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @RestResource(exported = false)
    @JoinColumn(name = "estate_id", nullable = true)
    private Estate estate;

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

    @Transient
    public Car getCar() {
        return car;
    }
    public void setCar(Car car) {
        this.car = car;
    }

    @Transient
    public Estate getEstate() {
        return estate;
    }
    public void setEstate(Estate estate) {
        this.estate = estate;
    }
}
*/