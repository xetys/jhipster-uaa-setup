package de.stytex.foobar.aop.security;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created on 31.05.16.
 *
 * @author David Steiman, K-TEL Communications GmbH
 */
@Aspect
public class OAuthAspect {
    Logger log = LoggerFactory.getLogger(OAuthAspect.class);


    @Pointcut("execution(* **.**.retrieveToken(..))")
    public void pc() {
    }

    @Around("pc()")
    public Object adviceAround(ProceedingJoinPoint joinPoint) throws Throwable {
        log.info("ADVICE ADVICE ADVICE ADVICE ");
        try {
            Object result = joinPoint.proceed();
            return result;
        } catch (Throwable throwable) {
            throwable.printStackTrace();

            throw throwable;
        }
    }

    @Before("pc()")
    public void beforePc() {
        log.info("BEFORE ADVICE ADVICE ADVICE ADVICE ");
    }
}
