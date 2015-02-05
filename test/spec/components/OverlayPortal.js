'use strict';

describe('OverlayPortal', function () {
  var OverlayPortal, component;

  beforeEach(function () {
    OverlayPortal = require('../../../src/scripts/components/OverlayPortal.jsx');
    component = OverlayPortal();
  });

  it('should create a new instance of OverlayPortal', function () {
    expect(component).toBeDefined();
  });
});
