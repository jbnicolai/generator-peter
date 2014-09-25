'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var PeterGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Yo dude, take this stuff! *tips fedora*'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'So, how are you gonna name this thing?',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir("assets");
      this.dest.mkdir("assets/images");
      this.dest.mkdir("assets/styles");
      this.dest.mkdir("assets/images");
      this.dest.mkdir("assets/vendors");
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_bower.json', 'bower.json');
      this.template('_package.json', 'package.json', this.props);
      this.template('_index.html', 'index.html', this.props);
      this.src.copy('_master.styl', 'assets/styles/master.styl');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = PeterGenerator;
