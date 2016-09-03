**Express 2**

The following example shows how to use twig.js with express 2.

```js
var twig = require("twig"),
    app = require('express').createServer();

app.configure(function () {
    app.set('view engine', 'twig');
    app.set("view options", { layout: false });
    
    // This section is optional and used to configure twig.
    app.set("twig options", { 
        strict_variables: false
    });
});

app.register('twig', twig);

app.get('/', function(req, res){
  res.render('index', {
    message : "Hello World"
  });
});

app.listen(9999);
```