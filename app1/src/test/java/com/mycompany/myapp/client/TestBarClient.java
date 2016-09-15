package com.mycompany.myapp.client;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */
//@Component
public class TestBarClient implements BarClient {
    public List<Bar> getBars() {
        return Arrays.asList(new Bar("one"), new Bar("two"), new Bar("three"));
    }
}
