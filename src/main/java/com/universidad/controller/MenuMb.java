/**
 * 
 */
package com.universidad.controller;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

/**
 * @author Alvaro
 *
 */
@Component("menuMb")
public class MenuMb {

	private String mensaje = "Alvaro";
	
	@PostConstruct
	public void init() {
		
	}

	public void cambiarMensaje() {
		mensaje = "Usuario Error";
	}
	
	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
}