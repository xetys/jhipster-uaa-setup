package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.FooApp;
import com.mycompany.myapp.config.SecurityBeanOverrideConfiguration;
import com.mycompany.myapp.security.OAuth2TokenMockUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.mockito.internal.util.collections.Sets;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {FooApp.class, SecurityBeanOverrideConfiguration.class})
public class SecurityIntTest {

    @Inject
    private WebApplicationContext context;

    @Inject
    private OAuth2TokenMockUtil oAuth2TokenMockUtil;

    private MockMvc restMockMvc;

    @PostConstruct
    public void setup() {
        this.restMockMvc = MockMvcBuilders
            .webAppContextSetup(context)
            .apply(springSecurity())
            .build();

    }

    @Test
    public void testUnauthorizedAccess() throws Exception {
        restMockMvc.perform(get("/api/foos")
            .with(oAuth2TokenMockUtil.oauth2Authentication("test")))
            .andExpect(status().isForbidden());
    }

    @Test
    public void testAuthorizedAccess() throws Exception {
        restMockMvc.perform(get("/api/foos")
            .with(oAuth2TokenMockUtil.oauth2Authentication("test", Sets.newSet("web-app"))))
            .andExpect(status().isOk());
    }
}
