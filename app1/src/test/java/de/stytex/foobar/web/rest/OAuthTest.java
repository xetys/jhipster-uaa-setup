package de.stytex.foobar.web.rest;

import de.stytex.foobar.App1App;
import de.stytex.foobar.client.BarClient;
import de.stytex.foobar.domain.Bar;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.inject.Inject;

import java.util.List;

import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by on 27.05.16.
 *
 * @author David Steiman
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = App1App.class)
@WebAppConfiguration
@IntegrationTest
public class OAuthTest {

    Logger log = Logger.getLogger(OAuthTest.class);

    @Inject
    OAuth2AccessToken accessToken;

    @Inject
    BarClient barClient;

    @Test
    public void gettingAccessToken() throws Exception {
        log.info("access token is: {}" + accessToken.getValue());

        assertNotNull(accessToken.getValue());
    }

    @Test
    public void testBarClient() throws Exception {
        List<Bar> bars = barClient.getBars();

        assertNotEquals(0, bars.size());
    }
}
