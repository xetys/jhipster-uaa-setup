
CREATE TABLE IF NOT EXISTS gateway_ratelimiting (
    id text,
    time_unit text,
    time timestamp,
    value counter,
    PRIMARY KEY ((id, time_unit, time))
);
