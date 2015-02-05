'use strict';

describe('Overlay', function () {
  var Overlay, component;

  beforeEach(function () {
    Overlay = require('../../../src/scripts/components/Overlay.jsx');
    component = Overlay();
  });

  it('should create a new instance of Overlay', function () {
    expect(component).toBeDefined();
  });
});
