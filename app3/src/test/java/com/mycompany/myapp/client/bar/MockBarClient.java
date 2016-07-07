package com.mycompany.myapp.client.bar;

import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@Component
public class MockBarClient implements BarClient {
    @Override
    public List<Bar> getBars() {
        return null;
    }
}
