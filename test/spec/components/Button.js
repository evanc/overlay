'use strict';

describe('Button', function () {
  var Button, component;

  beforeEach(function () {
    Button = require('../../../src/scripts/components/Button.jsx');
    component = Button();
  });

  it('should create a new instance of Button', function () {
    expect(component).toBeDefined();
  });
});
