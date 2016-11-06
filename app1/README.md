# foo

This application was generated using JHipster 3.7.0, you can find documentation and help at [https://jhipster.github.io/documentation-archive/v3.7.0](https://jhipster.github.io/documentation-archive/v3.7.0).

This is a "microservice" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].

## Development

To start your application in the dev profile, simply run:

    ./gradlew


For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Building for production

To optimize the foo application for production, run:

    ./gradlew -Pprod clean bootRepackage

To ensure everything worked, run:

    java -jar build/libs/*.war


Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./gradlew test

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the `src/main/docker` folder to launch required third party services.
For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./gradlew bootRepackage -Pprod buildDocker

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`yo jhipster:docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To set up a CI environment, consult the [Setting up Continuous Integration][] page.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 3.7.0 archive]: https://jhipster.github.io/documentation-archive/v3.7.0
[Doing microservices with JHipster]: https://jhipster.github.io/documentation-archive/v3.7.0/microservices-architecture/
[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v3.7.0/development/
[Service Discovery and Configuration with the JHipster-Registry]: https://jhipster.github.io/documentation-archive/v3.7.0/microservices-architecture/#jhipster-registry
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v3.7.0/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v3.7.0/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v3.7.0/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v3.7.0/setting-up-ci/


