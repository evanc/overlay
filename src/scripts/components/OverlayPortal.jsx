/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Shade = require('./Shade');

var style = {
};

var overlayStyle = {
    position: 'absolute',
    top: 0,
    left: '50%',
    borderRadius: 3,
    margin: '100px auto'
};

var OverlayPortal = React.createClass({
    displayName: "OverlayPortal",

    getDefaultProps: function() {
        return {
            width: 500,
            onShadeClick: function () {}
        };
    },

    render: function () {

        overlayStyle.width = this.props.width;
        overlayStyle.marginLeft = -1 * (this.props.width / 2);

        return (
            <div style={style}>
                <Shade onClick={this.props.onShadeClick}>
                    <div style={overlayStyle}>
                        {this.props.children}
                    </div>
                </Shade>
            </div>
        );
    }
});

module.exports = OverlayPortal;
