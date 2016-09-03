package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.client.Bar;
import com.mycompany.myapp.client.BarClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@RestController
class SomeController {
    @Inject
    private BarClient barClient;

    @GetMapping("/api/client/bar")
    public List<Bar> getBars() {
        return barClient.getBars();
    }
}
