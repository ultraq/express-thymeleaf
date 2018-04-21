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
/* eslint-env jest */
'use strict';

const expressThymeleaf = require('./express-thymeleaf');

const {TemplateEngine} = require('thymeleaf');

/**
 * Tests for the express-thymeleaf bridge module.
 */
describe('express-thymeleaf', function() {

	let templateEngine;
	beforeEach(function() {
		templateEngine = new TemplateEngine();
	});

	test('Express template engine function for success', function(done) {
		jest.spyOn(templateEngine, 'processFile').mockImplementation(() => {
			return Promise.resolve('success');
		});
		let bridge = expressThymeleaf(templateEngine);
		bridge('template.html', {}, function(error, result) {
			expect(error).toBe(null);
			expect(result).toBe('success');
			done();
		});
	});

	test('Express template engine function for errors', function(done) {
		jest.spyOn(templateEngine, 'processFile').mockImplementation(() => {
			return Promise.reject(new Error('error'));
		});
		let bridge = expressThymeleaf(templateEngine);
		bridge('template.html', {}, function(error, result) {
			expect(error).toBeInstanceOf(Error);
			expect(error.message).toBe('error');
			expect(result).toBe(undefined);
			done();
		});
	});
});
