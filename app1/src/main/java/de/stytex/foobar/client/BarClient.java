package de.stytex.foobar.client;

import de.stytex.foobar.domain.Bar;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by on 26.05.16.
 *
 * @author David Steiman
 */
@FeignClient("app2")
public interface BarClient {
    @RequestMapping(value = "/api/bars", method = RequestMethod.GET)
    List<Bar> getBars();
}
