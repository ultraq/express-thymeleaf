
Express Thymeleaf
=================

[![Build Status](https://travis-ci.com/ultraq/express-thymeleaf.svg?branch=master)](https://travis-ci.com/ultraq/express-thymeleaf)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/express-thymeleaf/badge.svg?branch=master)](https://coveralls.io/github/ultraq/express-thymeleaf?branch=master)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=3600)](https://www.npmjs.com/package/express-thymeleaf)

Integrate [ThymeleafJS](https://github.com/ultraq/thymeleafjs) with
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
> conjunction with the ThymeleafJS project, so expect anything below to change.

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
