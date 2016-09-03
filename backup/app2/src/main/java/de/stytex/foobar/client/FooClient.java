package de.stytex.foobar.client;

import de.stytex.foobar.client.dto.Foo;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by on 04.06.16.
 *
 * @author David Steiman
 */
@FeignClient("http://app1")
public interface FooClient {
    @RequestMapping("/api/foos")
    List<Foo> getFoos();
}
