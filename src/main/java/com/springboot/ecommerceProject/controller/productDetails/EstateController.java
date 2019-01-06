package com.springboot.ecommerceProject.controller.productDetails;

import com.springboot.ecommerceProject.model.productDetails.Estate;
import com.springboot.ecommerceProject.service.EstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/estates")
public class EstateController {

    @Autowired
    @Qualifier("estateService")
    private EstateService estateService;

    //Find All
    @RequestMapping(method = RequestMethod.GET)
    public List<Estate> findAll() {
        return estateService.findAll();
    }

    //View
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Estate> view(@PathVariable String id) {
        return estateService.findOneById(id);
    }

    //MyProducts
    @RequestMapping(value = "/myProducts/{id}", method = RequestMethod.GET)
    public List<Estate> myProducts(@PathVariable String id) {
        return estateService.findByUserIdService(id);
    }

    //Save
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody Estate estate) {
        estateService.save(estate);
    }

    //Update
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody Estate estate) {
        estateService.update(estate);
    }

    //Delete
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        estateService.delete(id);
    }

}
