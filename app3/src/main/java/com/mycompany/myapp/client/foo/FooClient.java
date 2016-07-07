package com.mycompany.myapp.client.foo;

import com.mycompany.myapp.client.AuthorizedFeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@AuthorizedFeignClient(name = "app1")
public interface FooClient {
    @RequestMapping(method = RequestMethod.GET, value = "api/foos")
    List<Foo> getFoos();
}
