package com.example.manage.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.manage.interfaces.UserI;
import com.example.manage.model.User;
import com.example.manage.repository.UserDao;

// servicio y logica de negocio, este se comunica con el controller pero usa los metodos del dao.
@Service
public class UserServices implements UserI{

    //logica de negocio
    @Autowired
    private UserDao dao;

    @Override
    public User putPasswordByEmail(User u) {
        // primero triago al usuario
        // luego lo modifico
        User user = dao.findByUserName(u.getUserName());
        user.setPassword(u.getPassword());
        return createUser(user);
    }

    @Override
    public User putPassword(User u) {
        // sabemos quien es el usuario y solamente lo traemos editado      
        return createUser(u);
    }

    @Override
    public User putImg(User u) {
        return createUser(u);
    }

    // sirve para crear y modificar    
    @Override
    public User createUser(User u) {
        if (u == null){
            System.out.println("THE USER IS NULL");
        }
        return dao.save(u);
    }

    @Override
    public User login(Map<String, String> mapUser) {
        // buscar y comparar valores
        String username = mapUser.get("username");
        String password = mapUser.get("password");
        User user = dao.findByUserName(username);
        System.out.println("hey que pasa "+user);
        if(user != null){
            if (user.getUserName().equals(username)  && user.getPassword().equals(password)){
                System.out.println("paso el filtro");
                return user;
            }
        }
                        
        return new User(); 
    }
    
}
