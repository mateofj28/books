package com.example.manage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManageApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManageApplication.class, args);
		System.out.println("Init server....");
	}

}


// Spring security es el componente que permite darla segura a nuestro sistema considerando que
// solo brindara la informacion una vez se haya autenticado, adicionalmente se tiene conceptos como 
// la autorizacion para que de esa manera pueda acceder a cierta 
// informacion sensible de quien este realizando la request

// temas como 
// autenticacion y autorizacion

// adicionalmente estamos usando el jwt (token) que contiene informacion del usuario
// que esta manipulando el sistema y asi es que el sistema autentica y autoriza al usuario
// una vez este haga una peticion con el token.


// para las relaciones en mongo la anotacion DBRef, servira para asociar
// que el campo definido es esta ligado a una instancia existente en otro documento
// de mongo

// nota: una vez tengamos la dependencia se seguridad, las consultas solo otorgaran informacion
// cuando se entregue el usuario por defecto, el usuario es USER y la contraseña es generada en la consola
// una vez entregado las credenciales, obtendremos la informacion.

// nota: obviamente podemos crear nuestros usuarios.
