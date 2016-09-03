package de.stytex.foobar.client.dto;

/**
 * Created by on 04.06.16.
 *
 * @author David Steiman
 */
public class Foo {
    private long id;

    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
