'use strict';

describe('EditPageTwo', function () {
  var EditPageTwo, component;

  beforeEach(function () {
    EditPageTwo = require('../../../src/scripts/components/EditPageTwo.jsx');
    component = EditPageTwo();
  });

  it('should create a new instance of EditPageTwo', function () {
    expect(component).toBeDefined();
  });
});
