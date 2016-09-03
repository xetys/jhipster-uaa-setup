package com.mycompany.myapp.client;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by on 02.09.16.
 *
 * @author David Steiman
 */
@AuthorizedFeignClient(name = "bar")
public interface BarClient {
    @RequestMapping("/api/bars")
    List<Bar> getBars();
}
