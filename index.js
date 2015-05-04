var EventEmitter = require('events').EventEmitter;
var applyCSS = require('apply-selector-and-css');
var merge = require('merge');
var style = require('dom-style');
var defaultCSS = require('./css');

module.exports = function quickContextMouse(settings) {

  var emitter = new EventEmitter();
  var html = document.getElementsByTagName('html');
  var el = document.createElement('div');
  var css;
  var s;

  s = settings = settings || {};
  s.container = s.container || window;
  s.css = s.css === undefined ? defaultCSS : s.css;

  if(s.css !== false) {
    s.css = merge.recursive(defaultCSS, s.css);
  }

  console.log(s.css);

  css = applyCSS(s.css);
  css(el, '#mockPointer');

  if(s.container === window) {

    document.body.appendChild(el);
  } else {

    s.container.appendChild(el);
  }

  if(typeof s.evaluate !== 'function') {
    throw new Error('settings must define evalute which returns css selectors');
  }

  s.container.addEventListener('mousemove', function(ev) {

    var selector = s.evaluate(ev);

    style(el, {
      position: 'absolute',
      left: ev.clientX + 'px',
      top: ev.clientY + 'px'
    });

    css(el, '#mockPointer' + selector);
  });

  return emitter;
};