package com.mycompany.myapp.service;

import com.mycompany.myapp.client.BarClient;
import com.mycompany.myapp.domain.Foo;
import com.mycompany.myapp.repository.FooRepository;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */
@Service
class FooBarService {
    @Inject
    private BarClient barClient;

    @Inject
    private FooRepository fooRepository;

    public void syncFoosWithBars() {
        barClient.getBars().forEach(bar ->
            fooRepository.save(fooRepository.findOneByValue(bar.getValue())
                .orElseGet(() -> new Foo(bar.getValue()))));
    }
}
