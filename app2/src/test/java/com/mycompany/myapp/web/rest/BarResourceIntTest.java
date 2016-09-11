package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.BarApp;
import com.mycompany.myapp.domain.Bar;
import com.mycompany.myapp.repository.BarRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the BarResource REST controller.
 *
 * @see BarResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BarApp.class)
public class BarResourceIntTest {
    private static final String DEFAULT_VALUE = "AAAAA";
    private static final String UPDATED_VALUE = "BBBBB";

    @Inject
    private BarRepository barRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Inject
    private EntityManager em;

    private MockMvc restBarMockMvc;

    private Bar bar;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        BarResource barResource = new BarResource();
        ReflectionTestUtils.setField(barResource, "barRepository", barRepository);
        this.restBarMockMvc = MockMvcBuilders.standaloneSetup(barResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Bar createEntity(EntityManager em) {
        Bar bar = new Bar();
        bar.setValue(DEFAULT_VALUE);
        return bar;
    }

    @Before
    public void initTest() {
        bar = createEntity(em);
    }

    @Test
    @Transactional
    public void createBar() throws Exception {
        int databaseSizeBeforeCreate = barRepository.findAll().size();

        // Create the Bar

        restBarMockMvc.perform(post("/api/bars")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(bar)))
                .andExpect(status().isCreated());

        // Validate the Bar in the database
        List<Bar> bars = barRepository.findAll();
        assertThat(bars).hasSize(databaseSizeBeforeCreate + 1);
        Bar testBar = bars.get(bars.size() - 1);
        assertThat(testBar.getValue()).isEqualTo(DEFAULT_VALUE);
    }

    @Test
    @Transactional
    public void getAllBars() throws Exception {
        // Initialize the database
        barRepository.saveAndFlush(bar);

        // Get all the bars
        restBarMockMvc.perform(get("/api/bars?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(bar.getId().intValue())))
                .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE.toString())));
    }

    @Test
    @Transactional
    public void getBar() throws Exception {
        // Initialize the database
        barRepository.saveAndFlush(bar);

        // Get the bar
        restBarMockMvc.perform(get("/api/bars/{id}", bar.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(bar.getId().intValue()))
            .andExpect(jsonPath("$.value").value(DEFAULT_VALUE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingBar() throws Exception {
        // Get the bar
        restBarMockMvc.perform(get("/api/bars/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateBar() throws Exception {
        // Initialize the database
        barRepository.saveAndFlush(bar);
        int databaseSizeBeforeUpdate = barRepository.findAll().size();

        // Update the bar
        Bar updatedBar = barRepository.findOne(bar.getId());
        updatedBar.setValue(UPDATED_VALUE);

        restBarMockMvc.perform(put("/api/bars")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(updatedBar)))
                .andExpect(status().isOk());

        // Validate the Bar in the database
        List<Bar> bars = barRepository.findAll();
        assertThat(bars).hasSize(databaseSizeBeforeUpdate);
        Bar testBar = bars.get(bars.size() - 1);
        assertThat(testBar.getValue()).isEqualTo(UPDATED_VALUE);
    }

    @Test
    @Transactional
    public void deleteBar() throws Exception {
        // Initialize the database
        barRepository.saveAndFlush(bar);
        int databaseSizeBeforeDelete = barRepository.findAll().size();

        // Get the bar
        restBarMockMvc.perform(delete("/api/bars/{id}", bar.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Bar> bars = barRepository.findAll();
        assertThat(bars).hasSize(databaseSizeBeforeDelete - 1);
    }
}
