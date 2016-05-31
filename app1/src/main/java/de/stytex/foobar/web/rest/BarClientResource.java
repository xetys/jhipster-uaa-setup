package de.stytex.foobar.web.rest;

import de.stytex.foobar.client.BarClient;
import de.stytex.foobar.domain.Bar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by on 26.05.16.
 *
 * @author David Steiman
 */

@RestController
@RequestMapping("/api/clients")
public class BarClientResource {

    private int counter = 0;

    private BarClient barClient;

    @Autowired
    public BarClientResource(BarClient barClient) {
        this.barClient = barClient;
    }

    @RequestMapping(value = "/bars")
    public ResponseEntity<List<Bar>> getBars() {
        return ResponseEntity.ok(barClient.getBars());
    }

    @RequestMapping(value ="/counter")
    public String counter() {
        counter++;
        return String.valueOf(counter);
    }


}
