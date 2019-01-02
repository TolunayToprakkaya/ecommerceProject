package com.springboot.ecommerceProject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.ecommerceProject.model.productDetails.Car;
import com.springboot.ecommerceProject.model.productDetails.Estate;
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
    private Set<Car> cars = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "category")
    private Set<Estate> estates = new HashSet<>();

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @JsonIgnore
    public Set<Car> getCars() {
        return cars;
    }
    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }

    @JsonIgnore
    public Set<Estate> getEstates() {
        return estates;
    }
    public void setEstates(Set<Estate> estates) {
        this.estates = estates;
    }
}
