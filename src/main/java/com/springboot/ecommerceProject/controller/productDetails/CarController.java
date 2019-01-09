package com.springboot.ecommerceProject.controller.productDetails;

import com.springboot.ecommerceProject.model.User;
import com.springboot.ecommerceProject.model.productDetails.Car;
import com.springboot.ecommerceProject.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    @Qualifier("carService")
    private CarService carService;

    //Find All
    @RequestMapping(method = RequestMethod.GET)
    public List<Car> findAll() {
        return carService.findAll();
    }

    //View
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Car> view(@PathVariable String id){
        return carService.findOneById(id);
    }

    //MyProducts
    @RequestMapping(value = "/myProducts/{id}", method = RequestMethod.GET)
    public List<Car> myProducts(@PathVariable String id) {
        return carService.findByUserIdService(id);
    }

    //Save
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody Car car) {
        carService.save(car);
    }

    //Update
    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody Car car){
        carService.update(car);
    }

    //Delete
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        carService.delete(id);
    }

}
