package com.mycompany.myapp.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;
import org.springframework.cache.support.NoOpCacheManager; 

import javax.annotation.PreDestroy;
import javax.inject.Inject;

@SuppressWarnings("unused")
@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final Logger log = LoggerFactory.getLogger(CacheConfiguration.class);

    private CacheManager cacheManager;

    @PreDestroy
    public void destroy() {
        log.info("Closing Cache Manager");
    }

    @Bean
    public CacheManager cacheManager() {
        log.debug("No cache");
        cacheManager = new NoOpCacheManager();
        return cacheManager;
    }
}
