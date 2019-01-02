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
@Table(name = "T_ESTATE")
public class Estate extends AbstractEntity {

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
/*
    @OneToOne(mappedBy = "estate")
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
