package com.example.manage.interfaces;

import java.util.Map;

import com.example.manage.model.User;

// interfaz solo firmas
public interface UserI {

    
    User putPasswordByEmail (User u);
    
    User putPassword (User u);
    
    User putImg (User u);
    
    User createUser (User u);
    
    User login (Map<String, String> mapUser);
    
}
