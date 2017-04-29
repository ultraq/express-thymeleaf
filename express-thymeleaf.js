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
'use strict';

/**
 * Bridges the Promise value of Thymeleaf's `process*` functions and Express'
 * callback for rendering.
 * 
 * @param {Object} templateEngine
 *   The Thymeleaf template engine to use for rendering templates.
 * @return {Function}
 *   An Express-compatible template engine function that uses Thymeleaf for
 *   template rendering, executing the callback with the appropriate values for
 *   the rendering response.
 */
module.exports = function(templateEngine) {
	return function(filePath, options, callback) {
		templateEngine.processFile(filePath, options)
			.then(template => {
				callback(null, template);
			})
			.catch(error => {
				callback(error);
			});
	};
};
