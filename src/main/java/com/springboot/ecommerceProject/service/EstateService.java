package com.springboot.ecommerceProject.service;

import com.springboot.ecommerceProject.model.productDetails.Estate;

import java.util.List;
import java.util.Optional;

public interface EstateService {

    List<Estate> findAll();
    Optional<Estate> findOneById(String id);
    List<Estate> findByUserIdService(String id);
    Estate save(Estate estate);
    Estate update(Estate estate);
    void delete(String id);

}
