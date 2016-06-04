package de.stytex.foobar.web.rest;

import de.stytex.foobar.client.FooClient;
import de.stytex.foobar.client.dto.Foo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by on 04.06.16.
 *
 * @author David Steiman
 */
@RestController
@RequestMapping("/api/clients/foo")
public class FooClientResource {

    private FooClient fooClient;

    @Autowired
    public FooClientResource(FooClient fooClient) {
        this.fooClient = fooClient;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Foo>> getFoos() {
        return ResponseEntity.ok(fooClient.getFoos());
    }
}
