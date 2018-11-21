package com.springboot.ecommerceProject.service;

import com.springboot.ecommerceProject.model.productDetails.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {

    List<Car> findAll();
    Optional<Car> findOneById(String id);
    Car save(Car car);
    Car update(Car car);
    void delete(String id);

}
