package com.springboot.ecommerceProject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "T_CATEGORY")
public class Category extends AbstractEntity{

    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "category")
    private Set<Product> products = new HashSet<>();

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @JsonIgnore
    public Set<Product> getProducts() {
        return products;
    }
    public void setProducts(Set<Product> products) {
        this.products = products;
    }

}
