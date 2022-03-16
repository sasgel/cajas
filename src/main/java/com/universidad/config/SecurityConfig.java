/**
 * 
 */
package com.universidad.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.HeaderWriterLogoutHandler;
import org.springframework.security.web.authentication.session.CompositeSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.ConcurrentSessionControlAuthenticationStrategy;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionFixationProtectionStrategy;
import org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter;
import org.springframework.security.web.session.ConcurrentSessionFilter;
import org.springframework.security.web.session.SimpleRedirectSessionInformationExpiredStrategy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * @author JoseLuisE
 *
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private MyAuthenticationProvider myAuthenticationProvider;
	
	@Bean 
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();   
	}
		
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//			.and().authenticationEventPublisher(eventPublisher);	
		auth.authenticationProvider(myAuthenticationProvider);
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.csrf().disable()
			.authorizeRequests()
			.antMatchers("/javax.faces.resource/**").permitAll()
			.antMatchers("/resources/**").permitAll()
			.antMatchers("/cajas/menu/index.xhtml").hasAnyAuthority("ROLE_USER","ROLE_AMDIN")
			//.antMatchers("/view/usuarios.xhtml").hasAnyAuthority("ROLE_AMDIN")
			.anyRequest()
			.authenticated()
			.and()
			.formLogin()
				.loginPage("/login.xhtml").permitAll()
				.failureUrl("/login.xhtml?error=true")
				.usernameParameter("username")
				.passwordParameter("password")
			.and()
			.exceptionHandling()
				.accessDeniedHandler(customAccessDeniedHandler())
			.and()
			.logout()
				.logoutSuccessUrl("/login.xhtml")
				.logoutUrl("/logout")
				.invalidateHttpSession(true)
				.deleteCookies("auth_code","JSESSIONID")
				.clearAuthentication(true)
				.addLogoutHandler(new HeaderWriterLogoutHandler(
			            new ClearSiteDataHeaderWriter(
			              ClearSiteDataHeaderWriter.Directive.CACHE,
			              ClearSiteDataHeaderWriter.Directive.COOKIES,
			              ClearSiteDataHeaderWriter.Directive.STORAGE)))
			.and()
			.sessionManagement();
		
		http
			.addFilterBefore(customUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
			.addFilterBefore(concurrentSessionFilter(), ConcurrentSessionFilter.class)
			.headers().frameOptions().sameOrigin();
	}
	
	@Bean
	public FiltroSeguridadComplemetaria customUsernamePasswordAuthenticationFilter() throws Exception {
		FiltroSeguridadComplemetaria customUsernamePasswordAuthenticationFilter = new FiltroSeguridadComplemetaria();
	    customUsernamePasswordAuthenticationFilter
	        .setAuthenticationManager(authenticationManagerBean());
	    customUsernamePasswordAuthenticationFilter
	        .setRequiresAuthenticationRequestMatcher(new AntPathRequestMatcher("/login","POST"));
	    customUsernamePasswordAuthenticationFilter.setSessionAuthenticationStrategy(sas());
	    	    
	    return customUsernamePasswordAuthenticationFilter; 
	}
	
	@Bean
	public SessionRegistryImpl sessionRegistry() {
		return new SessionRegistryImpl();
	}
	
	@Bean
	public CompositeSessionAuthenticationStrategy sas() {
		ConcurrentSessionControlAuthenticationStrategy  controlSession = new ConcurrentSessionControlAuthenticationStrategy(sessionRegistry());
		controlSession.setMaximumSessions(1);
		
		List<SessionAuthenticationStrategy> listSession = new ArrayList<SessionAuthenticationStrategy>();
						
		listSession.add(controlSession);
		listSession.add(new SessionFixationProtectionStrategy());
		listSession.add(new RegisterSessionAuthenticationStrategy(sessionRegistry()));
		
		return new CompositeSessionAuthenticationStrategy(listSession); 
	}
	
	@Bean
	public AccessDeniedHandler customAccessDeniedHandler() {
		return new CustomAccessDeniedHandler();
	}
	
	@Bean
    public ConcurrentSessionFilter concurrentSessionFilter() {
        SimpleRedirectSessionInformationExpiredStrategy redirectStrategy = new SimpleRedirectSessionInformationExpiredStrategy("/login.xhtml");
        ConcurrentSessionFilter concurrentSessionFilter = new ConcurrentSessionFilter(sessionRegistry(), redirectStrategy);
                
        return concurrentSessionFilter;
    }
	
	@Bean
	public CustomerUserDetailsService userDetailsServices() {
		return new CustomerUserDetailsService();
	}
	
}