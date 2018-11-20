package com.springboot.ecommerceProject.service;

import com.springboot.ecommerceProject.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> findAll();
    Optional<Category> findOneById(String id);
    Category save(Category category);
    Category update(Category category);
    void delete(String id);

}
