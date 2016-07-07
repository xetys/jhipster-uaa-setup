package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.App3App;
import com.mycompany.myapp.client.foo.Foo;
import com.mycompany.myapp.client.foo.FooClient;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.inject.Inject;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = App3App.class)
@WebIntegrationTest({"spring.profiles.active:test"})
public class FeignUnitTest {

    @Inject
    private FooClient fooClient;

    @Test
    public void works() throws Exception {
        fooClient.getFoos();
    }
}
