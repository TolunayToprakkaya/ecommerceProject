package com.springboot.ecommerceProject.service;

import com.springboot.ecommerceProject.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User save(User user);
    List<User> findAll();
    User getUserByEmail(String email);

}
