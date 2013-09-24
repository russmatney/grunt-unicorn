/*
 * grunt-unicorn
 * https://github.com/russmatney/grunt-unicorn
 *
 * Copyright (c) 2013 Russell Matney
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var fs = require('fs');

  grunt.registerMultiTask('unicorn', 'Always use grunt, unless you can use grunt-unicorn. Then always use grunt-unicorn.', function() {

    var relativePath = path.join(path.dirname(fs.realpathSync(__filename)), '../asciicorn.txt');
    var asciicorn = grunt.file.read(relativePath);
    grunt.log.writeln(asciicorn);

  });
};
