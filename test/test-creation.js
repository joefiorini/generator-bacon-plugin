/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require("assert");


describe('bacon-plugin generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('bacon-plugin:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'Gruntfile.coffee',
      'bower.json',
      'package.json',
      'karma.conf.js',
      'README.md',
      'tasks/options/clean.coffee',
      'tasks/options/coffee.coffee',
      'tasks/options/copy.coffee',
      'tasks/options/karma.coffee',
      'tasks/options/release.coffee',
      'tasks/options/simplemocha.coffee',
      'tasks/options/transpile.coffee',
      'tasks/options/uglify.coffee'
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      assert.equal(this.app.namespace, "Temp");
      helpers.assertFiles(expected);
      helpers.assertFile("src/main.coffee", /export default Bacon.Temp/);
      helpers.assertFile("tasks/options/release.coffee", /<%= version %>/);
      done();
    }.bind(this));
  });
});
