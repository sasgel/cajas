/**
 * 
 */
package com.universidad.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.universidad.dto.UsuarioDto;


/**
 * @author JoseLuisE
 *
 */
public class CustomerUserDetailsService {
	private static final Logger LOG = LoggerFactory.getLogger(CustomerUserDetailsService.class);
	
	public CustomerUserDetailsService() {
		super();
	}
	
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	
//	@Autowired
//	private UsuarioFeingClient usuarioFeingClient;
	
	/**
	 * Metodo para realizar la authentication del usuario que se va a firmar a la aplicacion
	 * @param authentication informacion del usuario, nombre de usuario, credenciales entre otros
	 * @return informacion del usuario que se esta firmando
	 */
	public UserDetails cargaUsuario(Authentication authentication) {
		UserAuthentication userAuth = null;
		
//		try {
//			Usuario usuario  = usuarioFeingClient.obtenerPorUsuario(authentication.getPrincipal().toString()); //authentication.getCredentials().toString()
			
//			usuario.getRoles().stream().map(role -> Arrays.asList("USER","AMDIN")).collect(Collectors.toList());
			
//			System.out.println("Username: "+authentication.getPrincipal().toString());
			
//			List<GrantedAuthority> authorities = usuario.getRoles().stream()
//					.map(role -> new SimpleGrantedAuthority(role.getNombre()))
//					.peek(authority -> authority.getAuthority()).collect(Collectors.toList());
			UsuarioDto usuario = new UsuarioDto();
			if("jose".equalsIgnoreCase(authentication.getPrincipal().toString())) {
				usuario.setUsuario("jose");
				usuario.setPassword("luis");
				
			
				List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
				authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
				
				if(usuario != null) {
					userAuth = new UserAuthentication(usuario.getUsuario(), usuario.getPassword(), true, true, true, true , authorities);
					userAuth.setUsuario(usuario);
				}
			}else if("alfrael".equalsIgnoreCase(authentication.getPrincipal().toString())) {
				usuario.setUsuario("alfrael");
				usuario.setPassword("luis");
			
				List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
				authorities.add(new SimpleGrantedAuthority("ROLE_AMDIN"));
				
				if(usuario != null) {
					userAuth = new UserAuthentication(usuario.getUsuario(), usuario.getPassword(), true, true, true, true , authorities);
					userAuth.setUsuario(usuario);
				}
				
			}else {
				throw new BadCredentialsException("El usuario no esta registrado");
			}
			
//		}catch (FeignException ef) {
//			String error = "Error en login, no existe el usuario: '"+ authentication.getPrincipal().toString() +"' en el sistema";
//			LOG.error(error);
//		
//			throw new UsernameNotFoundException(error);
//		}
		return userAuth;
	}
}