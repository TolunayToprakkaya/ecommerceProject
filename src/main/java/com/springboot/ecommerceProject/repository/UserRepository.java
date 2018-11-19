package com.springboot.ecommerceProject.repository;

import com.springboot.ecommerceProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmailIgnoreCase(String username);

}

/*
import com.springboot.ecommerceProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    User findByEmailIgnoreCase(String username);
}
*/