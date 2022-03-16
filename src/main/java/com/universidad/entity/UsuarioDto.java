/**
 * 
 */
package com.universidad.entity;

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
	private boolean activo;
	private String rol;
	
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
	public boolean isActivo() {
		return activo;
	}
	public void setActivo(boolean activo) {
		this.activo = activo;
	}
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
}