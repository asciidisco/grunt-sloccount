# grunt-sloccount [![Build Status](https://travis-ci.org/asciidisco/grunt-sloccount.png?branch=master)](https://travis-ci.org/asciidisco/grunt-sloccount)

> Generate output similar to the [SLOCCount](http://www.dwheeler.com/sloccount/) tool that can be consumed by the [SLOCCount Jenkins Plugin](https://wiki.jenkins-ci.org/display/JENKINS/SLOCCount+Plugin) for HTML, CSS & JS

## Example output

```
Creating filelist for src
Categorizing files.
Computing results.

69	js	  src	  /Users/foo/Projects/bar/application/src/application.js
37	css	  src	  /Users/foo/Projects/bar/application/src/application.css
114	html	src	  /Users/foo/Projects/bar/application/src/index.html
```


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sloccount --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sloccount');
```

## Sloccount task
_Run this task with the `grunt sloccount` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### comments
Type: `Bool`  
Default: `true`

Generate extra entries for the number of lines in comments

#### reportPath
Type: `String`

The pathname where the file should be generated

### Usage examples

#### Fetch source & test directories

```js
sloccount: {
  options: {
    reportPath: 'docs/sloc.sc'
  },
  src: ['src/*.js', 'test/*.js']
}
```

### Contributing

Tests are written in `nodeunit` & remain in the test folder & can be executed with the `grunt test` command.
Please make sure you adhere to the JS styleguide by running `grunt jscs` & `grunt jshint` (and use an editor that can process the `.editorconfig` file)
Indent = 2 spaces.

## Release History
 * 2014-07-09   v0.1.1   Fixed problem with comment line count overriding code line count
 * 2014-07-09   v0.1.0   Initial release.
