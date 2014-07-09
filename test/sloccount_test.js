'use strict';

// ext. libs
var grunt = require('grunt');
var spawn = require('child_process').spawn;

// Tests
exports.sloccount = {
  basic: function(test) {
    test.expect(2);
    var g = spawn('./node_modules/grunt-cli/bin/grunt', ['--gruntfile',  __dirname + '/Gruntfile.js', '--no-color']);

    g.stdout.on('data', function (data) {
      if (String(data).search('Done') !== -1) {
        test.ok(!!grunt.file.read(__dirname + '/fixtures/output/tmp.sc').search('3	js'), 'JS lines counted');
        test.ok(!!grunt.file.read(__dirname + '/fixtures/output/tmp.sc').search('1	jscm'), 'JSCM lines counted');
        test.done();
        g.unref();
      }
    });
  }
};