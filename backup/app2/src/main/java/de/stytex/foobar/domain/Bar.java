package de.stytex.foobar.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Bar.
 */
@Entity
@Table(name = "bar")
public class Bar implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "value")
    private String value;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Bar bar = (Bar) o;
        if(bar.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, bar.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Bar{" +
            "id=" + id +
            ", value='" + value + "'" +
            '}';
    }
}
