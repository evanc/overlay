'use strict';

describe('EditPageOne', function () {
  var EditPageOne, component;

  beforeEach(function () {
    EditPageOne = require('../../../src/scripts/components/EditPageOne.jsx');
    component = EditPageOne();
  });

  it('should create a new instance of EditPageOne', function () {
    expect(component).toBeDefined();
  });
});
