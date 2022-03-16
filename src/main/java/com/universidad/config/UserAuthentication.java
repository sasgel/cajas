/**
 * 
 */
package com.universidad.config;

import java.io.Serializable;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.universidad.entity.UsuarioDto;


/**
 * @author JoseLuisE
 *
 */
public class UserAuthentication extends User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2142816935032865785L;
	private UsuarioDto usuario;
	
	public UserAuthentication(String username, String password, boolean enabled, boolean accountNonExpired,
			boolean credentialsNonExpired, boolean accountNonLocked,
			Collection<? extends GrantedAuthority> authorities) {
		super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
	}

	/**
	 * @return the usuario
	 */
	public UsuarioDto getUsuario() {
		return usuario;
	}

	/**
	 * @param usuario the usuario to set
	 */
	public void setUsuario(UsuarioDto usuario) {
		this.usuario = usuario;
	}

}