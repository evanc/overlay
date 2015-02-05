/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var OverlayPortal = require('./OverlayPortal');

var Overlay = React.createClass({
    displayName: "Overlay",

    componentDidMount: function() {
        var node = document.createElement('div');
        document.body.appendChild(node);
        this.node = node;

        this.renderPortal(this.props);

    },

    componentWillReceiveProps: function(nextProps) {
        this.renderPortal(nextProps);
    },

    componentWillUnmount: function() {
        this.unrenderPortal();
        document.body.removeChild(this.node);
    },

    renderPortal: function (props) {
        sanitizeProps(props);
        if (this.portal) {
            this.portal.setProps(props);
        } else {
            this.portal = React.render(<OverlayPortal {...props} />, this.node);
        }
    },

    unrenderPortal: function () {
        React.unmountComponentAtNode(this.node);
    },

    render: function () {
        return null;
    },

    statics: {
        header: require("./Header"),
        footer: require('./Footer'),
        body: require('./Body'),

        closeButton: require('./CloseButton')
    }
});

module.exports = Overlay;

function sanitizeProps(props) {
    delete props.ref;
};
