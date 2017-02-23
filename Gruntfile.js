/*global module:false*/
'use strict';

var opt = require('./options');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    clean: {
      release: 'www-release'
    },

    requirejs: {
      compile: {
        options: opt
      }
    },

    cssmin: {
      compile: {
        files: {
          'www-release/css/style.css': 'www-release/css/style.css',
          'www-release/css/bootstrap.css': 'www-release/css/bootstrap.css',
          'www-release/css/bootstrap-responsive.css': 'www-release/css/bootstrap-responsive.css'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          amd: ['handlebars.runtime'],
          namespace: 'hawaii',
          processPartialName: function(filePath) {  // input: templates/_header.hbs
            console.log(filePath);
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1];       // output: _header.hbs
          },
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          }
        },
        files: {
          'www/js/grunt2-template.js': 'www/**/*.hbs'
        }
      }
    }


  });



  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task.
  grunt.registerTask('default', ['clean', 'requirejs', 'cssmin']);

};
