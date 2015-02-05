/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var style = {
    backgroundColor: 'white',
    padding: 30
};

var Body = React.createClass({
  render: function () {
    return (
        <div style={style}>
          {this.props.children}
        </div>
      );
  }
});

module.exports = Body;
