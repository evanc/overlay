'use strict';

describe('Main', function () {
  var LpOverlayApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    LpOverlayApp = require('../../../src/scripts/components/LpOverlayApp.jsx');
    component = LpOverlayApp();
  });

  it('should create a new instance of LpOverlayApp', function () {
    expect(component).toBeDefined();
  });
});
