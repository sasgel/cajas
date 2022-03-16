package com.universidad.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


public class FiltroSeguridadComplemetaria extends UsernamePasswordAuthenticationFilter{
	private SimpleUrlAuthenticationSuccessHandler simpleUrlSucces  = new SimpleUrlAuthenticationSuccessHandler();
	private SimpleUrlAuthenticationFailureHandler simpleUrlFailure = new SimpleUrlAuthenticationFailureHandler();
	private String succesUrl;
	private String errorUrl;
	
	/**
     * Constructor por defecto
     */
   	
    public FiltroSeguridadComplemetaria() {
        super();
    }
    
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
				
		this.obtainUsername(request);
		this.obtainPassword(request);
		
		return authenticador(request, response);
	}
	
	@Override
	protected String obtainUsername(HttpServletRequest request) {
		String userName = super.obtainUsername(request);
		if(userName == null || userName.isEmpty()) {
			throw new BadCredentialsException("El campo Usuario es obligatorio, favor de verificarlo");
		}
		return userName;
	}
	
	@Override
	protected String obtainPassword(HttpServletRequest request) {
		String password = super.obtainPassword(request);
		if(password == null || password.isEmpty()) {
			throw new BadCredentialsException("El campo Password es obligatorio, favor de verificarlo");
		}
		
		return password;
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
		simpleUrlSucces.setDefaultTargetUrl("/menu/index.xhtml");
		this.setAuthenticationSuccessHandler(simpleUrlSucces);
		super.successfulAuthentication(request, response, chain, authResult);
	}
	
	@Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
		simpleUrlFailure.setDefaultFailureUrl("/login.xhtml?error=1"); 
		this.setAuthenticationFailureHandler(simpleUrlFailure);
		super.unsuccessfulAuthentication(request, response, failed);
	}
	
	public Authentication authenticador(HttpServletRequest request, HttpServletResponse response) {
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(obtainUsername(request), obtainPassword(request));
		Authentication auth = this.getAuthenticationManager().authenticate(token);
		
		return auth;
	}
	
	
	/**
	 * @return the succesUrl
	 */
	public String getSuccesUrl() {
		return succesUrl;
	}

	/**
	 * @param succesUrl the succesUrl to set
	 */
	public void setSuccesUrl(String succesUrl) {
		this.succesUrl = succesUrl;
	}

	/**
	 * @return the errorUrl
	 */
	public String getErrorUrl() {
		return errorUrl;
	}

	/**
	 * @param errorUrl the errorUrl to set
	 */
	public void setErrorUrl(String errorUrl) {
		this.errorUrl = errorUrl;
	}
	
}