package com.springboot.ecommerceProject.service.Impl;

import com.springboot.ecommerceProject.model.productDetails.Car;
import com.springboot.ecommerceProject.repository.productDetails.CarRepository;
import com.springboot.ecommerceProject.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("carService")
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> findAll() {
        return this.carRepository.findAll();
    }

    @Override
    public Optional<Car> findOneById(String id) {
        return this.carRepository.findById(id);
    }

    @Override
    public Car save(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public Car update(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public void delete(String id) {
        carRepository.deleteById(id);
    }
}
