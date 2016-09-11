package com.mycompany.myapp.service;

import com.mycompany.myapp.FooApp;
import com.mycompany.myapp.config.SecurityBeanOverrideConfiguration;
import com.mycompany.myapp.domain.Foo;
import com.mycompany.myapp.repository.FooRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.context.WebApplicationContext;

import javax.inject.Inject;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.assertFalse;

/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {FooApp.class, SecurityBeanOverrideConfiguration.class})
public class FooBarServiceUnitExTest {

    @Inject
    private WebApplicationContext context;

    @Inject
    private FooRepository fooRepository;

    @Inject
    private FooBarService fooBarService;

    @Test
    public void testSync() {
        fooBarService.syncFoosWithBars();
        List<Foo> synced = fooRepository.findAll();

        assertFalse(
            synced.stream()
                .map(Foo::getValue)
                .collect(Collectors.toList())
                .retainAll(Arrays.asList("one", "two", "three"))
        );
    }
}
