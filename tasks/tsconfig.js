/*
 * grunt-tsconfig
 * https://github.com/filipbech/grunt-tsconfig
 *
 * Copyright (c) 2015 Filip Bruun Bech-Larsen
 * Licensed under the MIT license.
 */

'use strict';

var expand = require("glob-expand");
var glob = expand.glob;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('tsconfig', 'Creates typescript tsconfig.json based on options and fileGlobs.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

	options.files = expand(options.filesGlob);

	grunt.file.write('tsconfig.json', JSON.stringify(options, null, 2));

	grunt.log.writeln('tsconfig created');


  });


};
