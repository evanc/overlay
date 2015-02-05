/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var FooterLeft, FooterRight;

var style = {
    borderRadius:'0 0 3px 3px',
    height: '70px',
    backgroundColor: '#D5DBE1'
};


var stylesLeft = {
        float: 'left',
        margin: '20px 30px 20px 30px'
    },
    stylesRight = {
        float: 'right',
        margin: '20px 30px 20px 30px'
    };

FooterLeft = React.createClass({
    render: function () {
        return <div style={stylesLeft}>{this.props.children}</div>;
    }
});

FooterRight = React.createClass({
    render: function () {
        return <div style={stylesRight}>{this.props.children}</div>;
    }
});

var Footer = React.createClass({
  render: function () {
    return (
        <div style={style}>
          {this.props.children}
        </div>
      );
  },

  statics: {
    left: FooterLeft,
    right: FooterRight
  }
});

module.exports = Footer;


