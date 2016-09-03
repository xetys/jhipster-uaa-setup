# twig.js

[![Build Status](https://secure.travis-ci.org/justjohn/twig.js.png)](http://travis-ci.org/#!/justjohn/twig.js)

# About

Twig.js is a pure JavaScript implementation of the Twig PHP templating language
(<http://twig.sensiolabs.org/>)

The goal is to provide a library that is compatible with both browsers and server side containers such as node.js.

Twig.js is currently a work in progress and supports a limited subset
of the Twig templating language (with more coming).

## Download

You can get Twig.js by either of the following methods:

1. Clone the repository 

    `git clone git://github.com/justjohn/twig.js.git`

2. Download an archive of the latest as a [zip](https://github.com/justjohn/twig.js/zipball/master) or [tgz](https://github.com/justjohn/twig.js/tarball/master)

## Implementation Details

See the [implementation details](https://github.com/justjohn/twig.js/wiki/Implementation-Notes) wiki page for a list of supported filters/functions/tags/tests.

## Node Usage

Twig.js is available as a Node package which you can install from npm

    npm install twig

Twig.js is compatible with Express 2 and 3 and can be setup with the following code:

### app.js

**Express 3**

```js
var express = require('express'),
    app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'twig');

    // This section is optional and can be used to configure twig.
    app.set('twig options', { 
        strict_variables: false
    });
});

app.get('/', function(req, res){
    res.render('index', {
        message : "Hello World"
    });
});

app.listen(9999);
```

### views/index.twig

```html
Message of the moment: <b>{{ message }}</b>
```

### Using a custom file extension

You can use a custom file extension by registering twig as the view engine for the extension you want. For example, to use the html extension, you would use: 

```js
twig = require('twig');

// ... in app.configure
app.set('view engine', 'html');
app.engine('html', twig.__express);
```

See the [Express 2 page](/justjohn/twig.js/wiki/Express-2) for compatibility with Express 2.

## Browser Usage

From the browser, Twig.js can be used with inline templates or templates loaded from AJAX.

### Inline Templates

```js
var template = twig({
    id: "list", // id is optional, but useful for referencing the template later
    data: "{% for value in list %}{{ value }}, {% endfor %}"
});

var output = template.render({
    list: ["one", "two", "three"]
});

// output = "one, two, three, "
```

If an **id** is provided when you create a template, you can reference the template anywhere else in your application by using the **ref** parameter:

```js
// Elsewhere in your application
var output = twig({ ref: "list" }).render({
    list: ["a", "b", "c"]
});

// output = "a, b, c, "
```

### AJAX Templates

Templates can also be loaded via ajax by setting the **href** parameter in the twig() options.

__templates/posts.twig__
```html
{% for post in posts %}
    <article>
        <header>
            <h1>{{ post.title }}</h1>
        </header>
        <p>{{ post.body }}</p>
    </article>
{% endfor %}
```

__app.js__
```js
var template = twig({
    id: "posts",
    href: "templates/posts.twig",
    // for this example we'll block until the template is loaded
    async: false

    // The default is to load asynchronously, and call the load function 
    //   when the template is loaded.

    // load: function(template) { }
});
```

Once you've loaded templates, you can access them via their id and render them when you have data.

```js
posts = { ... }; // data from somewhere like an AJAX callback

// render the template
var postsHTML = twig({ ref: "posts" }).render(posts);

// Display the rendered template
document.getElementById("posts").innerHTML = postsHTML;
```