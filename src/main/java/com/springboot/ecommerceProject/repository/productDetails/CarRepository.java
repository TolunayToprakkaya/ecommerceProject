package com.springboot.ecommerceProject.repository.productDetails;

import com.springboot.ecommerceProject.model.productDetails.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "cars", collectionResourceRel = "cars", exported = false)
public interface CarRepository extends JpaRepository<Car, String>{
}
