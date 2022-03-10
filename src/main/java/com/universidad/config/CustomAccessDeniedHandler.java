/**
 * 
 */
package com.universidad.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;

/**
 * @author JoseLuisE
 *
 */
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
 
    public static final Logger LOG = LoggerFactory.getLogger(CustomAccessDeniedHandler.class);
 
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException exc) throws IOException, ServletException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        LOG.info("Usuario CustoAccess");
        if (auth != null) {
            LOG.info("usuario: " + auth.getPrincipal().toString()+ " no puede acceder a una URL protegida: "+ request.getRequestURI());
        }
        response.sendRedirect(request.getContextPath() + "/logout");
    }
}