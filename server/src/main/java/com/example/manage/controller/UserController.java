

package com.example.manage.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.manage.model.User;
import com.example.manage.service.UserServices;

@RestController
@RequestMapping("/user/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServices services;

    @PostMapping("/login")
    public ResponseEntity<User> apiLogin(@RequestBody Map<String, String> mapUser){
        System.out.print(mapUser);
        User user_response = services.login(mapUser);
        if (user_response == null){
            return new ResponseEntity<User>(user_response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user_response, HttpStatus.OK);
    }

    @PostMapping("/createUser")
    public ResponseEntity<User> apiCreateUser(@RequestBody User user){
        User u = services.createUser(user);
        return new ResponseEntity<User>(u, HttpStatus.OK);
    }

    @PostMapping("/putImg")
    public ResponseEntity<User> apiPutImg(@RequestBody User user){
        User u = services.putImg(user);
        return new ResponseEntity<User>(u, HttpStatus.OK);
    }

    @PostMapping("/putPasswordByLogin")
    public ResponseEntity<User> apiPutPasswordByLogin(@RequestBody User user){
        User u = services.putPasswordByEmail(user);
        return new ResponseEntity<User>(u, HttpStatus.OK);
    }

    @PostMapping("/putPassword")
    public ResponseEntity<User> apiPutPassword(@RequestBody User user){
        User u = services.putPassword(user);
        return new ResponseEntity<User>(u, HttpStatus.OK);
    }
    
}
