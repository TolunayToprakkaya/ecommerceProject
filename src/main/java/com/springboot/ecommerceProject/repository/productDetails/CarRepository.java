package com.springboot.ecommerceProject.repository.productDetails;

import com.springboot.ecommerceProject.model.User;
import com.springboot.ecommerceProject.model.productDetails.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(path = "cars", collectionResourceRel = "cars", exported = false)
public interface CarRepository extends JpaRepository<Car, String>{
    List<Car> findByUserId(String id);

    //@Query("SELECT c FROM Car c WHERE c.title LIKE %:title%")
    List<Car> findByTitleIgnoreCaseContaining(@Param(value = "title") String title);
}
