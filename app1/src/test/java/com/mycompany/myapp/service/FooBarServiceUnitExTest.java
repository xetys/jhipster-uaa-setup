package com.mycompany.myapp.service;

import com.mycompany.myapp.FooApp;
import com.mycompany.myapp.client.Bar;
import com.mycompany.myapp.client.BarClient;
import com.mycompany.myapp.config.SecurityBeanOverrideConfiguration;
import com.mycompany.myapp.domain.Foo;
import com.mycompany.myapp.repository.FooRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.inject.Inject;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.assertFalse;
import static org.mockito.BDDMockito.given;

/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {FooApp.class, SecurityBeanOverrideConfiguration.class})
public class FooBarServiceUnitExTest {

    @Inject
    private FooRepository fooRepository;

    @Inject
    private FooBarService fooBarService;

    @MockBean
    private BarClient barClient;

    @Test
    public void testSync() {
        given(barClient.getBars()).willReturn(
            Arrays.asList(new Bar("one"), new Bar("two"), new Bar("three"))
        );
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
