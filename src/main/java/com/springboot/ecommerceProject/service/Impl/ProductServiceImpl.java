package com.springboot.ecommerceProject.service.Impl;

import com.springboot.ecommerceProject.model.Product;
import com.springboot.ecommerceProject.repository.ProductRepository;
import com.springboot.ecommerceProject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("productService")
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return this.productRepository.findAll();
    }

    @Override
    public Optional<Product> findOneById(String id) {
        return this.productRepository.findById(id);
    }

    @Override
    public Product save(Product category) {
        return this.productRepository.save(category);
    }

    @Override
    public Product update(Product category) {
        return this.productRepository.save(category);
    }

    @Override
    public void delete(String id) {
        productRepository.deleteById(id);
    }
}
