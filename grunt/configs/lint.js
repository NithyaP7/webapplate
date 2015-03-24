/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  jshint: {
    utils: {
      options: {
        jshintrc: true
      },
      src: [
        '*.js',
        'tasks/**/*.js'
      ]
    },
    server: {
      options: {
        jshintrc: true
      },
      src: [
        'server.js',
        'routes/**/*.js'
      ]
    },
    client: {
      options: {
        jshintrc: true
      },
      src: [
        '<%= param.src %>/**/*.js'
      ]
    }
  },
  jscs: { // exclude list defined in .jscsrc
    options: {
      config: '.jscsrc'
    },
    utils: {
      src: [
        '*.js',
        'tasks/**/*.js'
      ]
    },
    server: {
      src: [
        'server.js',
        'routes/**/*.js'
      ]
    },
    client: {
      src: [
        '<%= param.src %>/**/*.js'
      ]
    }
  },
  jsonlint: {
    files: {
      src: [
        'package.json',
        'bower.json',
        '<%= param.src %>/manifest.webapp',
        '<%= param.src %>/manifest.json',
        '<%= param.src %>/**/*.json'
      ]
    }
  },
  csslint: {
    options: {
      csslintrc: '.csslintrc'
    },
    strict: { // attach exclude file with prefix '!', ex: ![path]/main.css
      src: ['<%= param.src %>/style/**/*.css']
    }
  },
  sloc: {
    client: {
      files: {
        './': [
          '<%= param.src %>/*.html',
          '<%= param.src %>/js/*.js',
          '<%= param.src %>/style/*.css',
          '<%= param.src %>/test/unit/*.js'
        ]
      }
    },
    server: {
      files: {
        './': [
          'server.js',
          'routes/**/*.js',
          'views/**/*.html'
        ]
      }
    }
  },
  githooks: {
    all: {
      'pre-commit': 'lint'
    }
  }
};
