# JHipster 3.7 Demo: A microservice application secured with OAuth2
This application is a fully JHipster generated demo, demonstrating the usage of JHipster UAA


# Few words about JHipster UAA

An UAA is defined as User Account and Authentcation service, and manages user accounts, user authentication and authorization.
Instead of share JHipster UAA as an prebuilt application as JHipster Registry or JHipster Console, this UAA is generated as an
JHipster application, with options to implement the user account API with all existing features wrapped up in JHipster.

You can find further information in the [official JHipster UAA documentation][] and [in my tutorial blog article][]

# What is in the box?

* an UAA (as it rolled out from generators)
* app1 and app2 with one entity each, "Foo" on app1 and "Bar" on app2 both with one field "value" of type "string"
* an gateway app, generated using app1 and app2 entity configuration
* a docker directory, storing docker-compose information to start the application using all apps

# How to run?

To start of quickly, first use the build script in root:

``` sh
$ ./build-all.sh
```

and then just start the whole setup using:


``` sh
$ cd docker/
$ docker-compose up -d
```

# How to test

You can use `./gradlew test` to test the applications the usual way. For a test using curl or some other HTTP client, you first

```
$ curl -XPOST -d "grant_type=password" -d "username=admin" -d "password=admin" "web_app:@localhost:8080/uaa/oauth/token"
{"access_token":"eyJ...L2A","expires_in":43199,"scope":"openid","jti":"86f84e4b-e242-43d0-ab30-a759dcc03f19"}
```

to retrieve authorized "bars":

```
$ curl -H "Authorization: Bearer eyJ...L2A" "localhost:8080/bar/api/bars"
[]
```

you can also login as just an internal service using:

```
$ curl -XPOST -d "grant_type=client_credentials" "internal:internal@localhost:8080/uaa/oauth/token"
{"access_token":"eyJh...FmrQ","token_type":"bearer","expires_in":43199,"scope":"web-app","jti":"7229e92f-824e-4940-9727-48d9df31eeed"}
```

and perform a similar request to the `SomeController` endpoint from app1:

```
$ curl -H "Authorization: Bearer eyJh...FmrQ" "localhost:8080/foo/api/client/bar"
[]
```

**note**: it sometimes happens, that the first request fails with code 500 and some Zuul error. Just repeat the operation, then this should work.

# How this project was created?

This project was generated with the following commands:

``` sh
$ mkdir docker uaa gateway app1 app2
$ cd uaa
$ yo jhipster
? (1/16) Which *type* of application would you like to create? Microservice UAA service
? (2/16) As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts. 9999
? (3/16) What is your default Java package name? de.stytex.foobar
? (4/16) Which *type* of database would you like to use? SQL (H2, MySQL, PostgreSQL, Oracle)
? (5/16) Which *production* database would you like to use? PostgreSQL
? (6/16) Which *development* database would you like to use? H2 with disk-based persistence
? (7/16) Do you want to use Hibernate 2nd level cache? Hazelcast
? (8/16) Do you want to use a search engine in your application? No
? (9/16) Would you like to use Maven or Gradle for building the backend? Gradle
? (10/16) Would you like to enable internationalization support? Yes
? Please choose the native language of the application? English
? Please choose additional languages to install
? (11/16) Which testing frameworks would you like to use?
[...]
$ ./gradlew -x test build -Pprod buildDocker
[...]
$ cd ../app1
$ yo jhipster
? (1/16) Which *type* of application would you like to create? Microservice application
? (2/16) What is the base name of your application? app1
? (3/16) As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts. 8081
? (4/16) What is your default Java package name? de.stytex.foobar
? (5/16) Which *type* of database would you like to use? SQL (H2, MySQL, PostgreSQL, Oracle)
? (6/16) Which *production* database would you like to use? PostgreSQL
? (7/16) Which *development* database would you like to use? H2 with disk-based persistence
? (8/16) Do you want to use Hibernate 2nd level cache? Hazelcast
? (9/16) Do you want to use a search engine in your application? No
? (10/16) Would you like to use Maven or Gradle for building the backend? Gradle
? (11/16) Would you like to enable internationalization support? Yes
? Please choose the native language of the application? English
? Please choose additional languages to install
? (12/16) Which testing frameworks would you like to use?
[...]
$ yo jhipster:entity Foo

The entity Foo is being created.

? Do you want to add a field to your entity? Yes
? What is the name of your field? value
? What is the type of your field? String
? Do you want to add validation rules to your field? No
? Do you want to add a field to your entity? No
? Do you want to add a relationship to another entity? No
? Do you want to use a Data Transfer Object (DTO)? No, use the entity directly
? Do you want to use separate service class for your business logic? No, the REST controller should use the repository directly
? Do you want pagination on your entity? No
[...]
$ ./gradlew -x test build -Pprod buildDocker
$ cd ../app2
$ yo jhipster
? (1/16) Which *type* of application would you like to create? Microservice application
? (2/16) What is the base name of your application? app2
? (3/16) As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts. 8082
? (4/16) What is your default Java package name? de.stytex.foobar
? (5/16) Which *type* of database would you like to use? SQL (H2, MySQL, PostgreSQL, Oracle)
? (6/16) Which *production* database would you like to use? PostgreSQL
? (7/16) Which *development* database would you like to use? H2 with disk-based persistence
? (8/16) Do you want to use Hibernate 2nd level cache? Hazelcast
? (9/16) Do you want to use a search engine in your application? No
? (10/16) Would you like to use Maven or Gradle for building the backend? Gradle
? (11/16) Would you like to enable internationalization support? Yes
? Please choose the native language of the application? English
? Please choose additional languages to install
? (12/16) Which testing frameworks would you like to use?
[...]
$ yo jhipster:entity Bar
[... the same as in Foo ...]
$ ./gradlew -x test build -Pprod buildDocker
$ cd ../gateway
$ yo jhipster
? (1/16) Which *type* of application would you like to create? Microservice gateway
? (2/16) What is the base name of your application? gateway
? (3/16) As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts. 8080
? (4/16) What is your default Java package name? de.stytex.foobar
? (5/16) Which *type* of database would you like to use? SQL (H2, MySQL, PostgreSQL, Oracle)
? (6/16) Which *production* database would you like to use? PostgreSQL
? (7/16) Which *development* database would you like to use? H2 with disk-based persistence
? (8/16) Do you want to use Hibernate 2nd level cache? Hazelcast
? (9/16) Do you want to use a search engine in your application? No
? (10/16) Do you want to use clustered HTTP sessions? No
? (11/16) Do you want to use WebSockets? No
? (12/16) Would you like to use Maven or Gradle for building the backend? Gradle
? (13/16) Would you like to use the LibSass stylesheet preprocessor for your CSS? No
? (14/16) Would you like to enable internationalization support? Yes
? Please choose the native language of the application? English
? Please choose additional languages to install
? (15/16) Which testing frameworks would you like to use?
[...]
$ yo jhipster:entity Foo

The entity Foo is being created.

? Do you want to generate this entity from an existing microservice? Yes
? Enter the path to the microservice root directory: ../app1

Found the .jhipster/Foo.json configuration file, entity can be automatically generated!

? Do you want to update the entity? This will replace the existing files for this entity, all your custom code will be overwritten Yes, re generate the entity
[...]
y$ yo jhipster:entity Bar

The entity Bar is being created.

? Do you want to generate this entity from an existing microservice? Yes
? Enter the path to the microservice root directory: ../app2

Found the .jhipster/Bar.json configuration file, entity can be automatically generated!

? Do you want to update the entity? This will replace the existing files for this entity, all your custom code will be overwritten Yes, re generate the entity
[...]


```


[official JHipster UAA documentation]: https://jhipster.github.io/using-uaa/
[in my tutorial blog article]: http://stytex.de/blog/2016/09/15/jhipster-3-dot-7-secure-service-communication/
