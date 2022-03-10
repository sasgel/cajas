package com.universidad.config;

import java.util.Arrays;

import javax.faces.webapp.FacesServlet;
import javax.servlet.ServletContext;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.web.session.HttpSessionEventPublisher;

@Configuration 
public class WebConfig {
	
	@Bean
	public ServletRegistrationBean<FacesServlet>jsfServletRegistration (ServletContext servletContext){
		
		//spring boot
		servletContext.setInitParameter("com.sun.faces.forceLoadConfiguration", Boolean.TRUE.toString());
		//servletContext.addListener(new HttpSessionEventPublisher());
		servletContext.setInitParameter("java.faces.STATE_SAVING_METHOD", "client");
		servletContext.setInitParameter("javax.servlet.jsp.jstl.fmt.localizationContext", "resources.application");
		servletContext.setInitParameter("primefaces.THEME", "luna-amber");
		servletContext.setInitParameter("primefaces.FONT_AWESOME", "true");
		servletContext.setSessionTimeout(30);
		
		//FacesServlet registro
		ServletRegistrationBean<FacesServlet> srb = new ServletRegistrationBean<FacesServlet>();
		srb.setServlet(new FacesServlet());
		srb.setUrlMappings(Arrays.asList("*.xhtml"));
		srb.setLoadOnStartup(1);
		
		return srb;
	}

}
