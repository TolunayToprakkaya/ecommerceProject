package com.springboot.ecommerceProject.repository.productDetails;

import com.springboot.ecommerceProject.model.productDetails.Estate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "estates", collectionResourceRel = "estates", exported = false)
public interface EstateRepository extends JpaRepository<Estate, String> {
}
