/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash');

var bodyStyle = {
    backgroundColor: 'white',
    padding: 30
};

var Body = React.createClass({
    getDefaultProps: function() {
        return {
            style: {}
        };
    },
  render: function () {

    var style = _.defaults(this.props.style, bodyStyle);

    return (
        <div {...this.props} style={style}>
          {this.props.children}
        </div>
      );
  }
});

module.exports = Body;
