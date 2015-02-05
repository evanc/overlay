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
    overflow: 'auto',
    backgroundColor: "rgba(44, 46, 47, 0.9)"    
};

var Shade = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },

    componentWillMount: function() {
        var bodyNode = window.document.body;
        this.scrollTop = bodyNode.scrollTop;
        console.log(this.scrollTop);
        
    },
    
    componentDidMount: function() {
        // don't let the underlying stuff scroll
        var bodyNode = this.getDOMNode().ownerDocument.body;
        this.bodyOverflow = bodyNode.style.overflow;
        this.getDOMNode().ownerDocument.body.style.overflow = 'hidden';
        bodyNode.scrollTop = this.scrollTop;
    },
    componentWillUnmount: function() {
        // restore previous overflow style
        this.getDOMNode().ownerDocument.body.style.overflow = this.bodyOverflow;
    },
    onClick: function (e) {
        // is this a click on the shade itself?
        if (e.target === this.getDOMNode()) {
            this.props.onClick();
        }
    },
    render: function () {
        return (
            <div onClick={this.onClick} style={style}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Shade;


