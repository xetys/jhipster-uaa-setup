package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.client.bar.BarClient;
import com.mycompany.myapp.client.foo.FooClient;
import com.mycompany.myapp.client.bar.Bar;
import com.mycompany.myapp.client.foo.Foo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@RestController
@RequestMapping("/api/client")
public class FeignClientsResource {

    private FooClient fooClient;

    private BarClient barClient;

    @Inject
    public FeignClientsResource(FooClient fooClient, BarClient barClient) {
        this.fooClient = fooClient;
        this.barClient = barClient;
    }

    @RequestMapping("/foos")
    public ResponseEntity<List<Foo>> getApiFoos() {
        return Optional.of(fooClient.getFoos())
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.badRequest().body(null));
    }

    @RequestMapping("/bars")
    public ResponseEntity<List<Bar>> getApiBars() {
        return Optional.of(barClient.getBars())
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.badRequest().body(null));
    }
}
