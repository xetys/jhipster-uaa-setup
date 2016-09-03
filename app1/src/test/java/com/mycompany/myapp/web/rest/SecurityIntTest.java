package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.FooApp;
import com.mycompany.myapp.security.WithMockOAuth2Authentication;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.mockito.internal.util.collections.Sets;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.OAuth2Request;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import java.util.LinkedList;
import java.util.Set;

import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */

@RunWith(SpringRunner.class)
@SpringBootTest(classes = FooApp.class)
@ActiveProfiles("test")
public class SecurityIntTest {

    @MockBean
    private ResourceServerTokenServices resourceServerTokenServices;

    @Inject
    private WebApplicationContext context;

    private MockMvc restMockMvc;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        this.restMockMvc = MockMvcBuilders
            .webAppContextSetup(context)
            .apply(springSecurity())
            .build();

    }

    @Before
    public void setUp() throws Exception {

        // Create the UsernamePasswordAuthenticationToken
        User principal = new User("test", "test", true, true, true, true, new LinkedList<>());
        Authentication authentication = new UsernamePasswordAuthenticationToken(principal, principal.getPassword(),
            principal.getAuthorities());

        // Create the authorization request and OAuth2Authentication object
        Set<String> scopeCollection = Sets.newSet("web-app");
        OAuth2Request authRequest = new OAuth2Request(null, "testClient", null, true, scopeCollection, null, null, null,
            null);
        OAuth2Authentication oAuth = new OAuth2Authentication(authRequest, authentication);
        given(this.resourceServerTokenServices.loadAuthentication("test"))
            .willReturn(oAuth);

        given(this.resourceServerTokenServices.readAccessToken("test"))
            .willReturn(new DefaultOAuth2AccessToken("test"));

    }

    @Test
    //@WithMockOAuth2Authentication(scope = {"not-web-app"})
    public void testUnauthorizedAccess() throws Exception {
        restMockMvc.perform(
            get("/api/foos")
            .header("Authorization", "Bearer testFalse")
        )
            .andExpect(status().is(401));
    }

    @Test
    //@WithMockOAuth2Authentication(scope = {"web-app"})
    public void testAuthorizedAccess() throws Exception {
        restMockMvc.perform(get("/api/foos")
            .header("Authorization", "Bearer test"))
            .andExpect(status().isOk());
    }
}
