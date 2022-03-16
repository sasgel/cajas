/**
 * 
 */
package com.universidad.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

/**
 * @author JoseLuisE
 *
 */
@Service
public class MyAuthenticationProvider implements AuthenticationProvider{
	
	@Autowired
	@Qualifier("customerUserDetailsService")
	private CustomerUserDetailsService userDetailsServices;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		UserDetails userDetails = null;
        
        userDetails = userDetailsServices.cargaUsuario(authentication);
        if(userDetails != null) {
        	return new UsernamePasswordAuthenticationToken(userDetails, authentication.getCredentials(), userDetails.getAuthorities());
        }else {	
        	throw new BadCredentialsException("Usuario y/o contreña invalidos !!");
        }
	}

	@Override
	public boolean supports(Class<?> authentication) {
		 return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

	/**
	 * @return the userDetailsServices
	 */
	public CustomerUserDetailsService getUserDetailsServices() {
		return userDetailsServices;
	}

	/**
	 * @param userDetailsServices the userDetailsServices to set
	 */
	public void setUserDetailsServices(CustomerUserDetailsService userDetailsServices) {
		this.userDetailsServices = userDetailsServices;
	}

}