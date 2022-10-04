package com.example.manage.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// import java.util.HashMap;
// import java.util.Map;


@RestController
@RequestMapping("")
public class Index {

    // private static final Logger logger = LoggerFactory.getLogger(Index.class);
    
    // @GetMapping("/message")
    // public ResponseEntity<?> getMessage(){
    //     // leyendo informacion de la autenticacion
    //     // var auth = SecurityContextHolder.getContext().getAuthentication();
    //     // // el usuario que realizo la peticion
    //     // logger.info("user data: {}", auth.getPrincipal());
    //     // // los permisos que contiene 
    //     // logger.info("user permissions: {}", auth.getAuthorities());
    //     // // si esta autenticado o no
    //     // logger.info("is authenticated?: {}", auth.isAuthenticated());
    //     // Map<String, String> message = new HashMap<>();
    //     // message.put("content", "hello world");
    //     // return ResponseEntity.ok(message);
    // }


}

// Nota: para la autorizacion, creamos una clase de tipo config, donde haremos las configuraciones para que pueda ser autorizado.
// y asi poder acceder a la informacion, ruta: autorizacion, validar configuraciones, si cumple esta autorizado, de lo contrario no.
