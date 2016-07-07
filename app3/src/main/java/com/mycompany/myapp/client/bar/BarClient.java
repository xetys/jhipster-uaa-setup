package com.mycompany.myapp.client.bar;

import com.otherpkg.AuthorizedFeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by on 07.07.16.
 *
 * @author David Steiman
 */
@AuthorizedFeignClient(name = "http://app2/api")
public interface BarClient {
    @RequestMapping(method = RequestMethod.GET, value = "/bars")
    List<Bar> getBars();
}
