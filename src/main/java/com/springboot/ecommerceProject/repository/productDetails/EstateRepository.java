package com.springboot.ecommerceProject.repository.productDetails;

import com.springboot.ecommerceProject.model.productDetails.Estate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(path = "estates", collectionResourceRel = "estates", exported = false)
public interface EstateRepository extends JpaRepository<Estate, String> {
    List<Estate> findByUserId(String id);

    List<Estate> findByTitleIgnoreCaseContaining(@Param(value = "title") String title);
}
