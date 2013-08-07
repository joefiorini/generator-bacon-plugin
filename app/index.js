'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BaconPluginGenerator = module.exports = function BaconPluginGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  var name = this.name;

  // Strip out bacon- or bacon_ for namespace name
  if (name.match(/^bacon/i)) {
    name = name.replace(/^bacon[_-]/i, "");
  }
  this.namespace = this._.classify(name);
};

util.inherits(BaconPluginGenerator, yeoman.generators.Base);

BaconPluginGenerator.prototype.askFor = function askFor() {
  // have Yeoman greet the user.
  console.log(this.yeoman);
};

BaconPluginGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.template('src/main.coffee');
  this.template('README.md');
};

BaconPluginGenerator.prototype.grunt = function gruntfiles() {
  this.template('Gruntfile.coffee');
  this.template('tasks/options/clean.coffee');
  this.template('tasks/options/coffee.coffee');
  this.template('tasks/options/copy.coffee');
  this.template('tasks/options/karma.coffee');
  this.template('tasks/options/release.coffee');
  this.template('tasks/options/simplemocha.coffee');
  this.template('tasks/options/transpile.coffee');
  this.template('tasks/options/uglify.coffee');
};

BaconPluginGenerator.prototype.testing = function testingfiles() {
  this.template('karma.conf.js');
};
