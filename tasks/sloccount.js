/*
 * grunt-sloccount
 * https://github.com/asciidisco/grunt-sloccount
 *
 * Copyright (c) 2014 Sebastian Golasch
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  'use strict';

  var fs = require('fs');
  var sloc = require('sloc');
  var path = require('path');

  grunt.registerTask('sloccount', 'Generates SLOCCount compatible output files', function () {
    var opts = grunt.config.data.sloccount;

    // check for report path
    if (!opts.options) {
      grunt.log.error('Please configure a report file!');
      return false;
    }

    var reportFile = opts.options.reportPath;

    // check for src directories
    if (!opts.src) {
      grunt.log.error('Please configure one or more src directories!');
      return false;
    }

    var filesToMatch = grunt.file.expand(opts.src);
    var folders = [];

    // generate flat list of folders
    var map = {};
    filesToMatch.forEach(function (currentValue) {
      var cv = path.dirname(currentValue);
      if (!map[cv]) {
        map[cv] = true;
        folders.push(cv);
      }
    });

    // clear file
    grunt.file.write(reportFile, '');

    // write (dynamic) intro for file
    folders.forEach(function (folder) {
      fs.appendFileSync(reportFile, 'Creating filelist for ' + folder + '\n', 'utf8');
    });

    // write (static) intro for file
    fs.appendFileSync(reportFile, 'Categorizing files.\n', 'utf8');
    fs.appendFileSync(reportFile, 'Computing results.\n', 'utf8');
    fs.appendFileSync(reportFile, '\n\n', 'utf8');

    var fileContents, stats, extname;
    filesToMatch.forEach(function (file) {
      extname = path.extname(file).replace('.', '');
      fileContents = fs.readFileSync(file, 'utf8');
      if (extname === 'js' || extname === 'css' || extname === 'scss' || extname === 'html') {
        stats = sloc(fileContents, extname);
        fs.appendFileSync(reportFile, stats.sloc + '\t' + extname + '\t' + path.dirname(file) + '\t' + fs.realpathSync(file) + '\n', 'utf8');

        // check if comments should be tracked seperatly
        if (opts.options.comments !== false) {
          fs.appendFileSync(reportFile, stats.cloc + '\t' + extname + 'cm' + '\t' + path.dirname(file) + '\t' + fs.realpathSync(file) + '\n', 'utf8');
        }
      }
    });

    grunt.log.ok('Report File: ' + opts.options.reportPath + ' written!');
    return true;
  });

};