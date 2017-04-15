
Express Thymeleaf
=================

Integrate [ThymeleafJS](https://github.com/ultraq/thymeleaf-js) with
[Express](http://expressjs.com/).

ThymeleafJS returns Promises of processed templates, but Express uses a callback
mechanism for receiving rendered/processed HTML.  This tiny module saves you
having to do the boilerplate of stitching those 2 together to get them to work.


Installation
------------

```
npm install express-thymeleaf --save
```


Usage
-----

> This module is still under development, denoted by the 0.x semver, in
> conjunction with the thymeleaf-js project, so expect anything below to change.

```javascript
import express          from 'express';
import expressThymeleaf from 'express-thymeleaf';
import thymeleaf        from 'thymeleaf';

// Configure your application to use Thymeleaf via the express-thymeleaf module
let app = express();
app.engine('html', expressThymeleaf(thymeleaf));
app.set('view engine', 'html');

// Render views as you would normally in response to requests
app.get('/', function(request, response) {
	response.render('index');
});

app.listen(3000);
```
