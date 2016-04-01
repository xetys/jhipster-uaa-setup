package de.stytex.foobar.web.rest;

import com.codahale.metrics.annotation.Timed;
import de.stytex.foobar.domain.Bar;
import de.stytex.foobar.repository.BarRepository;
import de.stytex.foobar.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Bar.
 */
@RestController
@RequestMapping("/api")
public class BarResource {

    private final Logger log = LoggerFactory.getLogger(BarResource.class);
        
    @Inject
    private BarRepository barRepository;
    
    /**
     * POST  /bars : Create a new bar.
     *
     * @param bar the bar to create
     * @return the ResponseEntity with status 201 (Created) and with body the new bar, or with status 400 (Bad Request) if the bar has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/bars",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Bar> createBar(@RequestBody Bar bar) throws URISyntaxException {
        log.debug("REST request to save Bar : {}", bar);
        if (bar.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("bar", "idexists", "A new bar cannot already have an ID")).body(null);
        }
        Bar result = barRepository.save(bar);
        return ResponseEntity.created(new URI("/api/bars/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("bar", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /bars : Updates an existing bar.
     *
     * @param bar the bar to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated bar,
     * or with status 400 (Bad Request) if the bar is not valid,
     * or with status 500 (Internal Server Error) if the bar couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/bars",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Bar> updateBar(@RequestBody Bar bar) throws URISyntaxException {
        log.debug("REST request to update Bar : {}", bar);
        if (bar.getId() == null) {
            return createBar(bar);
        }
        Bar result = barRepository.save(bar);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("bar", bar.getId().toString()))
            .body(result);
    }

    /**
     * GET  /bars : get all the bars.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of bars in body
     */
    @RequestMapping(value = "/bars",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Bar> getAllBars() {
        log.debug("REST request to get all Bars");
        List<Bar> bars = barRepository.findAll();
        return bars;
    }

    /**
     * GET  /bars/:id : get the "id" bar.
     *
     * @param id the id of the bar to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the bar, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/bars/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Bar> getBar(@PathVariable Long id) {
        log.debug("REST request to get Bar : {}", id);
        Bar bar = barRepository.findOne(id);
        return Optional.ofNullable(bar)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /bars/:id : delete the "id" bar.
     *
     * @param id the id of the bar to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/bars/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteBar(@PathVariable Long id) {
        log.debug("REST request to delete Bar : {}", id);
        barRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("bar", id.toString())).build();
    }

}
