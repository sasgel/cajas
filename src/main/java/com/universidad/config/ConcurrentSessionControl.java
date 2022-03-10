/**
 * 
 */
package com.universidad.config;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.web.authentication.session.ConcurrentSessionControlAuthenticationStrategy;

/**
 * @author JoseLuisE
 *
 */
public class ConcurrentSessionControl extends ConcurrentSessionControlAuthenticationStrategy{
	
	public ConcurrentSessionControl(SessionRegistry sessionRegistry) {
		super(sessionRegistry);
	}
	
	/**
	 * Metodo para recuperar el maximo de sessiones activas para el usuario authenticado
	 */
	protected int getMaximumSessionsForThisUser(Authentication authentication) {
		int maximumSessions = 1;
		return maximumSessions;
	}
	
}