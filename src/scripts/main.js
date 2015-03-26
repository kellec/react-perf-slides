// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke   = require('bespoke');
var voltaire  = require('bespoke-theme-voltaire');
var keys      = require('bespoke-keys');
var touch     = require('bespoke-touch');
var bullets   = require('bespoke-bullets');
var backdrop  = require('bespoke-backdrop');
var scale     = require('bespoke-scale');
var hash      = require('bespoke-hash');
var progress  = require('bespoke-progress');
var substeps  = require('bespoke-substeps/dom');

// Bespoke.js
bespoke.from('article', [
  voltaire(),
  keys(),
  touch(),
  substeps(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');


