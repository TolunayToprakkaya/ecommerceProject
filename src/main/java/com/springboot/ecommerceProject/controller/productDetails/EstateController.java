package com.springboot.ecommerceProject.controller.productDetails;

import com.springboot.ecommerceProject.model.productDetails.Estate;
import com.springboot.ecommerceProject.service.EstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public void view(@PathVariable String id) {
        estateService.findOneById(id);
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
