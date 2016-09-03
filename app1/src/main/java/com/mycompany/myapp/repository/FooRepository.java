package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Foo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Spring Data JPA repository for the Foo entity.
 */
@SuppressWarnings("unused")
public interface FooRepository extends JpaRepository<Foo,Long> {
    Optional<Foo> findOneByValue(String value);
}
