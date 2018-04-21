'use strict';

module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'express-thymeleaf.js'
	],
	coverageReporters: [
		'html',
		'lcov',
		'text-summary'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	}
};
