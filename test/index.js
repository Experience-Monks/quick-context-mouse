var quickContextMouse = require('./..');

var body = document.body;
var el1 = document.createElement('div');
var el2 = document.createElement('div');

el1.style.position = 'absolute';
el1.style.background = '#F00';
el1.style.left = '100px';
el1.style.top = '100px';
el1.style.width = '100px';
el1.style.height = '100px';

el2.style.position = 'absolute';
el2.style.background = '#CAFE00';
el2.style.left = '300px';
el2.style.top = '100px';
el2.style.width = '100px';
el2.style.height = '100px';


body.appendChild(el1);
body.appendChild(el2);

quickContextMouse( {

  css: {

    '.red': {
      border: '1px solid #000',
      background: 'rgba(255, 255, 255, 0.3)',
      display: 'block'
    },

    '.green': {
      border: '1px solid #000',
      background: 'rgba(0, 0, 0, 0.3)',
      display: 'block'
    },

    '.off': {
      display: 'none'
    }
  },

  evaluate: function(info) {

    switch(info.target) {
      case el1:
        return '.red';

      case el2:
        return '.green';

      default:
        return '.off';
    }
  }
});