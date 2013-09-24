/*
 * grunt-unicorn
 * https://github.com/russmatney/grunt-unicorn
 *
 * Copyright (c) 2013 Russell Matney
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('unicorn', 'Always use grunt, unless you can use grunt-unicorn. Then always use grunt-unicorn.', function() {

    var asciicorn = grunt.file.read('asciicorn.txt');
    grunt.log.writeln(asciicorn);

  });
};
