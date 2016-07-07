package com.mycompany.myapp.client;

import com.mycompany.myapp.client.foo.Foo;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@FeignClient("app1")
public interface SecondFooClient {
    @RequestMapping(method = RequestMethod.GET, value = "api/foos")
    List<Foo> getFoos();
}
