![project logo](https://raw.github.com/webapplate/webapplate/master/public/style/icons/icon128.png) 

# Webapplate 

The template to create a maintainable web app.

Before hacking with webapplate, [jsfiddle playground](http://jsfiddle.net/gasolin/sxjja37j/) is available for experiment! Or you can fork [ghapplate](https://github.com/webapplate/ghapplate) to write web app directly on github! Webapplate is still the more maintainable choice which allows you write with future proved javascript and css and trans-compile to current working code.

[![Build Status](https://travis-ci.org/webapplate/webapplate.png)](https://travis-ci.org/webapplate/webapplate) [![david-dm](https://david-dm.org/webapplate/webapplate.png)](https://david-dm.org/webapplate/webapplate) [![devDependency Status](https://david-dm.org/webapplate/webapplate/dev-status.svg)](https://david-dm.org/webapplate/webapplate#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/webapplate/webapplate/badge.png?branch=master)](https://coveralls.io/r/webapplate/webapplate?branch=master) [![Code Climate](https://codeclimate.com/github/webapplate/webapplate.png)](https://codeclimate.com/github/webapplate/webapplate) [![Codacy Badge](https://www.codacy.com/project/badge/b0dbc808c4fb83b26706fb376ceea678)](https://www.codacy.com/public/gasolin_1667/webapplate)

current version: v2.3.0

* Project page http://webapplate.github.io/
* [Webapplate introduction](https://hacks.mozilla.org/2014/09/webapplate-maintainable-web-app-template-for-firefox-os-and-chrome-apps/) from hacks.mozilla.org.
* Learn more from [webapplate document](https://github.com/webapplate/webapplate/wiki).

## Usage

Note: If you use docker, just check `With docker` section.

## Get the template

You can use git command to **clone** Webapplate:

```
$ git clone https://github.com/webapplate/webapplate.git
```

Or click 'ZIP' button on [github](https://github.com/webapplate/webapplate) to **download** the template.

## What is webapplate?

Webapplate is the Mobile First, full stack web app template/boilerplate that curated several libraries to help you quickly start a maintainable mobile web app development process. Webapplate enable you to optimized and export your web app to hosting server, Firefox/Chrome webapp store, or even Android, iOS, and more platforms.

Here is the screenshot when you first time running webapplate.

![Real welcome page](http://i.imgur.com/8AGwXCG.png)

### Setup

1. Install [node.js](http://www.nodejs.org) or [io.js](https://iojs.org/en/index.html)

2. Install useful command-line tools globally:

    ```
    $ npm install -g grunt-cli bower karma
    ```

   To fetch dependent packages, enter the webapplate folder and run

    ```
    $ npm install
    ```

   To bind the git pre-commit code style check, run command:

    ```
    $ grunt githooks
    ```
    
   Now you are all set. The above instructions only need to be executed once.

3. While you are editing code, run command:

    ```
    $ grunt karma
    ```

   To automaticly monitor and trigger all test when you change the code.

## Why need webapplate?

Though there are many powerful tools surround web technologies, web does not provide the `SDK` or ready to use `template` that just like Android or iOS. Web apps are simple to write but hard to get done right. Developer who wants to quickly build an web app usually consume much longer time to make their web app right.

Thus developer who is approaching to the `web app`(make web site behaves like mobile app) concept need a bootstrap or template project to start with. That's why webapplate comes.

## What kind of web app webapplate supports?

* **static hosting** web app
* **dynamic** web app with node.js/express backend 
* **packaged** web app for Firefox Marketplace or Chrome Store
* **cordova/phonegap** for multiple platform native app

To build the deployable web app, run command:

  ```
  $ grunt static|dynamic|pack|github|cordova
  ```
  
   Choose one of the above [grunt command](https://github.com/webapplate/webapplate/blob/master/Gruntfile.js) based on your needs.

## How does webapplate do

Webapplate provide full HTML5 development experience, use javascript to rule frontend, backend, build and test.

Webapplate provide a ready-to-deploy project bootstrap settings for both `hosted` (dynamic/static website) and `packaged` (no server) web app, with convention of file structure, [express](http://expressjs.com/) server-side support, and preconfigured helper tools like code style check, appcache generator, multi-locales and testframework.

Website inherit from Webapplate can be [deployed to any host provider](https://github.com/webapplate/webapplate/wiki/Deployment).

All magics are well integrated and configurable.

![Webapplate Functionality](http://i.imgur.com/r069BsG.png)

## Demos

Here are some examples that start the development by webapplate:

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before Firefox OS device officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.
* [bgzla](http://gasolin.github.io/bgzla/), Bugzilla monitor for Gaia project.
* [FoxQR](https://marketplace.firefox.com/app/qrcode-1/), QRCode scanner for Firefox OS, via WebRTC.

### With docker

Webapplate come with docker support. It helps you auto configure the development environment and could be deploy to Amazon Web Service or Google Cloud Platform.

Run

```
docker build -t webapplate/webapplate .
```

To build image at first time.

In linux, run

```
docker run webapplate/webapplate
```

to execute the server. You could connect to `localhost:8000` on browser to see the web page.

In other platform docker needs to run within `boot2docker` VM, you could get VM host ip via command

```
$ boot2docker ip
```

Then run command

```
docker run --rm -i -t -p 8000:8000 webapplate/webapplate
```

To forwarding port to your desktop. Connect to `$(boot2docker ip):8000` on browser to see the web page.
(generally is `http://192.168.59.103:8000/`)

## Tools Used:

__Package Management__
- [npm](https://www.npmjs.com/) Node Package manager
- [bower](http://bower.io/) Libraries manager

__Build__
- [grunt](http://gruntjs.com/) javascript task runner

__Transpiler__
- [Babel](https://babeljs.io) (ES6)
- [Myth](http://myth.io) (CSS)

__Optimize__
- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [UglifyJS](https://github.com/mishoo/UglifyJS) javascript Compressor
- [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) Compress CSS files
- [htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)  Minify HTML

__Code Quality & Analysis__
- [grunt-githooks](https://github.com/wecodemore/grunt-githooks)
- [jshint](http://jshint.com/) javascript code quality
- [jscs](http://jscs.info/) javascript code style linter
- [csslint](https://github.com/CSSLint/csslint) css code style linter
- [grunt-sloc](https://github.com/rhiokim/grunt-sloc) Source line of codes
- [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) Generate javascript doc by running jsdoc3

__Test__
- [Karma](http://karma-runner.github.io) test runner
- [Mocha](http://mochajs.org/) test framework
- [Chai](http://chaijs.com/) assertion library
- [Sinon](http://sinonjs.org/) test spies, stubs and mocks

__Server__
- [Express](http://expressjs.com/)
- [Swig](http://paularmstrong.github.io/swig/) JavaScript Template Engine

__Client side libraries__
- [l20n](http://l20n.org/) client side internationalization
- [Bootstrap](http://getbootstrap.com) mobile first front-end framework
- [Bootstrap Material Design](https://github.com/FezVrasta/bootstrap-material-design) material design theme for Bootstrap
- [localForage](https://github.com/mozilla/localForage) offline storage

## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, bower, and people who involved in improving Web technologies.
