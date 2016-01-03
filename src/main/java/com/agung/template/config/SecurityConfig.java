/*
 *  Copyright (c) 2015 Agung Pramono <agungpermadi13@gmail.com || www.github.com/agung pramono>.
 *  All rights reserved.
 * 
 * Silahkan digunakan dengan bebas / dimodifikasi
 * Dengan tetap mencantumkan nama @author dan Referensi / Source
 * Terima Kasih atas Kerjasamanya.
 * 
 *  SecurityConfig.java
 * 
 *  Created on Oct 31, 2015, 9:34:14 AM
 */
package com.agung.template.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;


/**
 *
 * @author agung
 */
@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    
    private static final String SQL_LOGIN 
            = "select username,password,active as enabled from "
            + "s_users where username = ?";
    
    private static final String SQL_AUTHORITY = "select u.username, r.nama_role as authority "
            + "from s_users u inner join s_role r "
            + "on u.id = r.id_user "
            + "where u.username=?";
    
    /**private static final String SQL_PERMISSION 
            = "select u.username,r.nama as authority "
            + "from s_users u join s_user_role ur on u.id = ur.id_user "
            + "join s_roles r on ur.id_role = r.id "
            + "where u.username = ?";*/
    
    
    @Autowired
    private DataSource ds;
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)throws Exception{
        auth
                //.inMemoryAuthentication()
                //.withUser("agung").password("123").roles("USER");
                .jdbcAuthentication()
                .dataSource(ds)
                .usersByUsernameQuery(SQL_LOGIN)
                .authoritiesByUsernameQuery(SQL_AUTHORITY);
                
    }
    
    
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .authorizeRequests()
                .antMatchers("/**/*.css").permitAll()
                .antMatchers("/**/*.js").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login").permitAll()
                .defaultSuccessUrl("/welcome")
                .and()
                .logout();
                //.and()
                //.addFilterAfter(new CsrfAngularJsIntegration(), CsrfFilter.class)
                //.csrf().csrfTokenRepository(csrfTokenRepository());
    }
    
    private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-XSRF-TOKEN");
        return repository;
    }
}
