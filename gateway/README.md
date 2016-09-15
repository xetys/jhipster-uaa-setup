# gateway

This application was generated using JHipster, you can find documentation and help at [https://jhipster.github.io](https://jhipster.github.io).

~~~
                                                   /-------------\
                                                   |   Browser   |
                                                   \------+------/
                                                          |
                                                          |
                                                          V 8080
                               /-----------------------------------------------------\
                               | Gateway                                             |
                               | +-----------+    +--------------+      +----------+ |
                               | |           |    |  Zuul Proxy  |      |          | |     +-------+
                               | | Angular   |    |              |      |  Access  +-|---->|       |
                               | | App       |    +--------------+      |  Control | |     | Users |
                               | |           |    |    Ribbon    |      |          | |     | Roles |
                               | +-----------+    +---+------+---+      +----------+ |     +-------+
                               |                      |      |                       |
                               \-+---------------------------------------------------/
                                 |                    |      |       
                                 |                    |      |                              
                                 |                    |      |                        
                                 |        +-----------/      \----------------+            
/-----------------------\        |        |                                   |
| JHipster Registry     |        |        V 8081                              V 8082
|                       |        | /-------------\     +-----+         /-------------\     +-----+
|  +-----------------+  |        | |             |     |     |         |             |     |     |
|  | Eureka Server   |  |        | |  Service 1  +---->| DB1 |         |  Service 2  +---->| DB2 |
|  +-----------------+  |        | |             |     |     |         |             |     |     |
|  | Config Server   |  |        | \--+-----+----/     +-----+         +--+------+---/     +-----+
|  +--------+--------+  |  8761  |    |     |                             |      |
|           |           |<-------+----+-----------------------------------/      |
\-----------------------/                   |                                    |
            |                               \-------------+----------------------/
            V                                             |
        +-------+                                         |
        |       |                 /------------------------------------------------\
        |  Git  |                 | ELK                   |                        | 
        |  Repo |                 |                       V 5000                   |
        +-------+                 | +---------+      +----------+      +--------+  |
                                  | | Elastic |      | Logstash |      | Kibana |  |
                                  | | Search  |<-----|          |      |        |  |
                                  | +---------+      +----------+      +--------+  |
                                  \------------------------------------------------/
~~~


## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools (like
[Bower][] and [BrowserSync][]). You will only need to run this command when dependencies change in package.json.

    npm install

We use [Gulp][] as our build system. Install the Gulp command-line tool globally with:

    npm install -g gulp

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./gradlew
    gulp

Bower is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in `bower.json`. You can also run `bower update` and `bower install` to manage dependencies.
Add the `-h` flag on any command to see how you can use it. For example, `bower update -h`.


## Building for production

To optimize the gateway client for production, run:

    ./gradlew -Pprod clean bootRepackage

This will concatenate and minify CSS and JavaScript files. It will also modify `index.html` so it references
these new files.

To ensure everything worked, run:

    java -jar build/libs/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Testing

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in `src/test/javascript/` and can be run with:

    gulp test


    
## Continuous Integration

To setup this project in Jenkins, use the following configuration:

* Project name: `gateway`
* Source Code Management
    * Git Repository: `git@github.com:xxxx/gateway.git`
    * Branches to build: `*/master`
    * Additional Behaviours: `Wipe out repository & force clone`
* Build Triggers
    * Poll SCM / Schedule: `H/5 * * * *`
* Build
    * Invoke Gradle script / Use Gradle Wrapper / Tasks: `-Pprod clean test bootRepackage`
* Post-build Actions
    * Publish JUnit test result report / Test Report XMLs: `build/test-results/*.xml`

[JHipster]: https://jhipster.github.io/
[Gatling]: http://gatling.io/
[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
