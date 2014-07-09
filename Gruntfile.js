module.exports = function (grunt) {
  // time grunt for measuring
  require('time-grunt')(grunt);
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // project config
  grunt.initConfig({

    // clean
    clean: {
      test: ['test/fixtures/output']
    },

    // hinting
    jshint: {
      files: ['tasks/*.js', 'test/*.js', 'Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // unit tests
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    // check styleguide compliance
    jscs: {
      main: ['test/*.js', 'tasks/*.js', 'Gruntfile.js']
    }
  });

  // default - does everything
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['clean:test', 'jshint', 'nodeunit', 'jscs']);
};