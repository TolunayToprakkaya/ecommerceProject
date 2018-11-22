package com.springboot.ecommerceProject.service.Impl;

import com.springboot.ecommerceProject.model.Category;
import com.springboot.ecommerceProject.repository.CategoryRepository;
import com.springboot.ecommerceProject.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service("categoryService")
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findOneById(String id) {
        return this.categoryRepository.findById(id);
    }

    @Transactional
    @Override
    public Category save(Category category) {
        return this.categoryRepository.save(category);
    }

    @Transactional
    @Override
    public Category update(Category category) {
        return this.categoryRepository.save(category);
    }

    @Transactional
    @Override
    public void delete(String id) {
        categoryRepository.deleteById(id);
    }
}
