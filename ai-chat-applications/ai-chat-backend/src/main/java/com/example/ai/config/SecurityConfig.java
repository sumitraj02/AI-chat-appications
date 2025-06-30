package com.example.ai.config;

//package com.yourname.aichat.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").authenticated() // Protect your API
                        .requestMatchers("/**").permitAll() // Allow HTML/CSS/JS
                )
                .formLogin(Customizer.withDefaults())  // Enable login form
                .logout(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable()); // Disable CSRF for APIs (be careful in production)

        return http.build();
    }
}
