package com.mycompany.myapp.client.foo;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */

@Component
@Primary
public class MockFooClient implements FooClient{
    @Override
    public List<Foo> getFoos() {
        return new LinkedList<>();
    }

}
