package com.springboot.ecommerceProject.model;

import com.springboot.ecommerceProject.model.seedwork.AbstractEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "T_CATEGORY")
public class Category extends AbstractEntity{

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

}
