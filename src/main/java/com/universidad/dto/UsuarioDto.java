/**
 * 
 */
package com.universidad.dto;

import java.io.Serializable;

/**
 * @author Alvaro
 *
 */
public class UsuarioDto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -68815955783865222L;
	private String usuario;
	private String password;
	
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
