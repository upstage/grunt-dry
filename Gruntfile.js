/*
 * grunt-dry
 * http://github.com/assemble/grunt-dry
 *
 * Copyright (c) 2013 Brian Wodward, Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    jshint: {
      options: { jshintrc: '.jshintrc' },
      all: ['Gruntfile.js', 'tasks/*.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
