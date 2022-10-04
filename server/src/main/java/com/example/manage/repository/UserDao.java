package com.example.manage.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.manage.model.User;

public interface UserDao extends MongoRepository<User, String>{
    User findByUserName (String userName);
}
