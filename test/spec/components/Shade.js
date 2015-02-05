'use strict';

describe('Shade', function () {
  var Shade, component;

  beforeEach(function () {
    Shade = require('../../../src/scripts/components/Shade.jsx');
    component = Shade();
  });

  it('should create a new instance of Shade', function () {
    expect(component).toBeDefined();
  });
});
