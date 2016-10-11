module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  const config = {

    clean: {
      ngi18n: [
        'src/**/**.js',
        'src/**/**.map',
        'src/**/**.metadata.json'
      ]
    },

    xliff: {
      options: {
        extract: true,
        exportText: true,
        languages: ['en']
      },
      files: {
        'extracted//': ['public/i18n/*.json']
      }
    }

  };

  grunt.initConfig(config);
  grunt.registerTask('clean-i18n', ['clean:ngi18n']);

};
