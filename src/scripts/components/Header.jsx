/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var style = {
    backgroundColor: '#72C152',
    height: 55,
    borderRadius: '3px 3px 0 0'
};

var textStyle = {
    fontSize: '18px',
    lineHeight: '55px',
    color: '#ffffff',
    marginLeft: '30px',
    marginRight: '30px',
    fontFamily: 'Open Sans, sans-serif'
};

var Header = React.createClass({
  render: function () {
    return (
        <div style={style}>
            <span style={textStyle}>
                {this.props.children}
            </span>
        </div>
      );
  }
});

module.exports = Header;
