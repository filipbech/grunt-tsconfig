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
	var files = options.filesGlob;

	var dir = '';

	if(this.data.rootDir) {
		if(this.data.rootDir.slice(this.data.rootDir.length-1) === '/') {
			dir = this.data.rootDir;
		} else {
			dir = this.data.rootDir+'/';
		}
	}

	if(this.data.rootDir) {
		files = files.map(function(g) {
			if(g.indexOf('!') === 0) {
				return '!'+dir+g.slice(1);

			}
			return dir+g;
		});
		options.additionalOptions.files = expand(files).map(function(file) {
			return file.replace(dir,'');
		});;
	} else {
		options.additionalOptions.files = expand(files);
	}

	grunt.file.write(dir+'tsconfig.json', JSON.stringify(options.additionalOptions, null, 2));

	grunt.log.writeln('tsconfig created');


  });


};
