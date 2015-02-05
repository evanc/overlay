'use strict';

describe('CloseButton', function () {
  var CloseButton, component;

  beforeEach(function () {
    CloseButton = require('../../../src/scripts/components/CloseButton.jsx');
    component = CloseButton();
  });

  it('should create a new instance of CloseButton', function () {
    expect(component).toBeDefined();
  });
});
