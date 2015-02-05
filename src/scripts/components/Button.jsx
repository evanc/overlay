/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var style = {
    margin: '0 10px 0px 0',
    padding: '10px',
    color: '#ffffff',
    fontSize: '12px',
    letterSpacing: '0.4px',
    float: 'left',
    backgroundColor: '#7d8f94',
    border: '1px solid #7d8f94',
    borderRadius: '3px',
    lineHeight: '9px',
    textDecoration: 'none',
    fontFamily: 'Open Sans, sans-serif'
};

var Button = React.createClass({
  render: function () {
    return (
        <div style={style} {...this.props}>
            {this.props.children}
        </div>
      );
  }
});

module.exports = Button;


