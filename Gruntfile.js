'use strict';

module.exports = function(grunt) {

	// Automatically load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// All js files
	let jsFiles = ['*.js', '*.json', './lib/**/*.js', './test/**/*.js'];

	grunt.initConfig({

		// Lint files
		jshint: {
			options: {
				esversion: 6,
				reporter: require('jshint-stylish'),
				node: true,
				expr: true,
				mocha: true,
				globals: { // Add global vars here
					//browser: false,
				}
			},
			// Run this task for all js files
			js: jsFiles
		},

		// Watch will kick off the default task on file change
		watch: {
			scripts: {
				files: jsFiles,
				tasks: ['default']
			},
		},

		// Beautify files
		jsbeautifier: {
			files: jsFiles,
			options: {
				js: {
					break_chained_methods: true,
					indentChar: " ",
					indentLevel: 0,
					indentSize: 2,
					indentWithTabs: true,
					jslint_happy: false,
					space_after_anon_function: false
				},
			}
		},
	});

	// Default task
	grunt.registerTask('default', ['jshint', 'jsbeautifier']);

};
