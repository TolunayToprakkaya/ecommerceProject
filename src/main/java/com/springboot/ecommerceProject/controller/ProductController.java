/*
package com.springboot.ecommerceProject.controller;

import com.springboot.ecommerceProject.model.Product;
import com.springboot.ecommerceProject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    @Qualifier("productService")
    private ProductService productService;

    //Find All
    @RequestMapping(method = RequestMethod.GET)
    public List<Product> findAll() {
        return productService.findAll();
    }

    //View
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public void view(@PathVariable String id) {
        productService.findOneById(id);
    }

    //Save
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody Product product) {
        productService.save(product);
    }

    //Update
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody Product product) {
        productService.update(product);
    }

    //Delete
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        productService.delete(id);
    }

}
*/