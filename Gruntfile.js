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
    },

    clean: {
      ngi18n: [
        'src/**/**.js',
        'src/**/**.map',
        'src/**/**.metadata.json'
      ]
    }

  };

  grunt.initConfig(config);

  grunt.registerTask('default', ['copy', 'sass']);
  grunt.registerTask('clean-i18n', ['clean:ngi18n']);

};
