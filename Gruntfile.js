module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  const config = {

    sass: {
      dist: {
        files: [
          {src: ['src/assets/styles/global-styles.scss'], dest: 'dist/styles.css'}
        ]
      }
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'public',
        src: '**/*.*',
        dest: 'dist/'
      }
    }

  };

  grunt.initConfig(config);

  grunt.registerTask('default', ['copy', 'sass']);

};
