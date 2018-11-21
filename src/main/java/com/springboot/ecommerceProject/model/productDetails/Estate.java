package com.springboot.ecommerceProject.model.productDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.Product;
import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_ESTATE")
public class Estate extends AbstractEntity {

    @Column(name = "type")
    private String type;

    @Column(name = "m2")
    private String m2;

    @Column(name = "room_count")
    private String roomCount;

    @Column(name = "build_age")
    private String buildAge;

    @Column(name = "floor")
    private String floor;

    @Column(name = "heating")
    private String heating;

    @Column(name = "bathroom_count")
    private String bathroomCount;

    @Column(name = "balcony")
    private String balcony;

    @Column(name = "owner")
    private String owner;

    @OneToOne(mappedBy = "estate")
    private Product product;

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public String getM2() {
        return m2;
    }
    public void setM2(String m2) {
        this.m2 = m2;
    }

    public String getRoomCount() {
        return roomCount;
    }
    public void setRoomCount(String roomCount) {
        this.roomCount = roomCount;
    }

    public String getBuildAge() {
        return buildAge;
    }
    public void setBuildAge(String buildAge) {
        this.buildAge = buildAge;
    }

    public String getFloor() {
        return floor;
    }
    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getHeating() {
        return heating;
    }
    public void setHeating(String heating) {
        this.heating = heating;
    }

    public String getBathroomCount() {
        return bathroomCount;
    }
    public void setBathroomCount(String bathroomCount) {
        this.bathroomCount = bathroomCount;
    }

    public String getBalcony() {
        return balcony;
    }
    public void setBalcony(String balcony) {
        this.balcony = balcony;
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
