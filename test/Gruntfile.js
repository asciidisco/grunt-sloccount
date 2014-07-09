module.exports = function (grunt) {
  grunt.initConfig({
    sloccount: {
      options: {
        reportPath: 'fixtures/output/tmp.sc'
      },
      src: ['fixtures/aTestFile.js']
    }
  });

  grunt.loadTasks('../tasks/');
  grunt.registerTask('default', ['sloccount']);
};