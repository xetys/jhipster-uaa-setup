package com.mycompany.myapp.config;

import com.mycompany.myapp.security.AuthoritiesConstants;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.RestTemplateCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

import javax.inject.Inject;

@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class MicroserviceSecurityConfiguration extends ResourceServerConfigurerAdapter {

    @Inject
    JHipsterProperties jHipsterProperties;

    @Inject
    DiscoveryClient discoveryClient;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
            .csrf()
            .disable()
            .headers()
            .frameOptions()
            .disable()
        .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
            .authorizeRequests()
            .antMatchers("/api/profile-info").permitAll()
            .antMatchers("/api/**").authenticated()
            .antMatchers("/management/**").hasAuthority(AuthoritiesConstants.ADMIN)
            .antMatchers("/swagger-resources/configuration/ui").permitAll();
    }

    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setVerifierKey(getKeyFromAuthorizationServer());
        return converter;
    }

    @Bean
    public RestTemplate loadBalancedRestTemplate(RestTemplateCustomizer customizer) {
        RestTemplate restTemplate = new RestTemplate();
        customizer.customize(restTemplate);
        return restTemplate;
    }

    @Inject
    @Qualifier("loadBalancedRestTemplate")
    private RestTemplate keyUriRestTemplate;

    private String getKeyFromAuthorizationServer() {
        // Load available UAA servers
        discoveryClient.getServices();
        HttpEntity<Void> request = new HttpEntity<Void>(new HttpHeaders());
        return (String) this.keyUriRestTemplate
            .exchange("http://uaa/oauth/token_key", HttpMethod.GET, request, Map.class).getBody()
            .get("value");

    }
}
