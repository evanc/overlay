'use strict';

describe('Body', function () {
  var Body, component;

  beforeEach(function () {
    Body = require('../../../src/scripts/components/Body.jsx');
    component = Body();
  });

  it('should create a new instance of Body', function () {
    expect(component).toBeDefined();
  });
});
