
Express Thymeleaf
=================

[![Build Status](https://travis-ci.org/ultraq/express-thymeleaf.svg?branch=master)](https://travis-ci.org/ultraq/express-thymeleaf)
[![GitHub tag](https://img.shields.io/github/tag/ultraq/express-thymeleaf.svg?maxAge=3600)](https://github.com/ultraq/express-thymeleaf/tags)
[![License](https://img.shields.io/github/license/ultraq/express-thymeleaf.svg?maxAge=2592000)](https://github.com/ultraq/express-thymeleaf/blob/master/LICENSE.txt)

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
import {TemplateEngine} from 'thymeleaf';

// Configure your application to use Thymeleaf via the express-thymeleaf module
let app = express();
let templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');

// Render views as you would normally in response to requests
app.get('/', function(request, response) {
  response.render('index');
});

app.listen(3000);
```
