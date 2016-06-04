package de.stytex.foobar.config;

import de.stytex.foobar.aop.logging.LoggingAspect;
import de.stytex.foobar.aop.security.OAuthAspect;
import org.springframework.context.annotation.*;

@Configuration
@EnableAspectJAutoProxy
public class LoggingAspectConfiguration {

    @Bean
    @Profile(Constants.SPRING_PROFILE_DEVELOPMENT)
    public LoggingAspect loggingAspect() {
        return new LoggingAspect();
    }

    @Bean
    public OAuthAspect oAuthAspect() {
        return new OAuthAspect();
    }
}
