/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var style = {
    position: 'absolute',
    right: 10,
    top: 10,
    height: 10,
    width: 10,
    cursor: 'pointer'
};

var CloseButton = React.createClass({
    render: function () {
        return (
            <a style={style} {...this.props}>X</a>
        );
    }
});

module.exports = CloseButton;


