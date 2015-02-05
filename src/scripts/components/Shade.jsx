/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var style = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(44, 46, 47, 0.9)"
    
};

var Shade = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },
    render: function () {
        return (
            <div onClick={this.props.onClick} style={style}></div>
        );
    }
});

module.exports = Shade;


