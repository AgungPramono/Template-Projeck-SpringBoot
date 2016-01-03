/*
 *  Copyright (c) 2015 Agung Pramono <agungpermadi13@gmail.com || www.github.com/agung pramono>.
 *  All rights reserved.
 * 
 * Silahkan digunakan dengan bebas / dimodifikasi
 * Dengan tetap mencantumkan nama @author dan Referensi / Source
 * Terima Kasih atas Kerjasamanya.
 * 
 *  CsrfAngularJsIntegration.java
 * 
 *  Created on Oct 31, 2015, 9:33:21 AM
 */
package com.agung.template.config;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

/**
 *
 * @author agung
 */
public class CsrfAngularJsIntegration extends OncePerRequestFilter{

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse resp, 
            FilterChain filterChain) throws ServletException, IOException {
        
        //ambil token dari request attribut
        CsrfToken csrf =  ((CsrfToken) req.getAttribute(CsrfToken.class.getName()));
        
        if(csrf != null){
            //pindahkan token ke dalam cookie agar dapat ditangkap oleh AngularJS
            Cookie cookie = WebUtils.getCookie(req, "XSRF-TOKEN");
            String token = csrf.getToken();
            
            if(cookie == null || token != null && !token.equals(cookie.getValue())) {
                //ganti nama cookie menjadi XSRF-TOKEN
                cookie = new Cookie("XSRF-TOKEN", token);
                cookie.setPath("/");
                resp.addCookie(cookie);
            }
        }
        filterChain.doFilter(req, resp);
    }
}
