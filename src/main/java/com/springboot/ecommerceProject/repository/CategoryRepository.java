package com.springboot.ecommerceProject.repository;

import com.springboot.ecommerceProject.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "categories", collectionResourceRel = "categories", exported = false)
public interface CategoryRepository extends JpaRepository<Category, String> {
}
