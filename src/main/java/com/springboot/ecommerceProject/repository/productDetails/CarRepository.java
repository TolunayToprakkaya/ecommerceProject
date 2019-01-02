package com.springboot.ecommerceProject.repository.productDetails;

import com.springboot.ecommerceProject.model.User;
import com.springboot.ecommerceProject.model.productDetails.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(path = "cars", collectionResourceRel = "cars", exported = false)
public interface CarRepository extends JpaRepository<Car, String>{
    Optional<Car> findByUserId(String id);
}
