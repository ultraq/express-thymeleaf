/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env mocha */
'use strict';

const {assert} = require('chai');
const Promise  = require('bluebird');

const expressThymeleaf = require('../express-thymeleaf');

/**
 * Tests for the express-thymeleaf bridge module.
 */
describe('express-thymeleaf', function() {

	it('Express template engine function for success', function(done) {
		let bridge = expressThymeleaf({
			processFile: function() {
				return Promise.resolve('success');
			}
		});
		bridge('template.html', {}, function(error, result) {
			assert.isNull(error);
			assert.strictEqual(result, 'success');
			done();
		});
	});

	it('Express template engine function for errors', function(done) {
		let bridge = expressThymeleaf({
			processFile: function() {
				return Promise.reject('error');
			}
		});
		bridge('template.html', {}, function(error, result) {
			assert.strictEqual(error, 'error');
			assert.isUndefined(result);
			done();
		});
	});
});
