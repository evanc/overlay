/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var {State, Navigation, Link} = require('react-router');

var Overlay = require('./Overlay');

var Button = require('./Button');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');

var LpOverlayApp = React.createClass({
    mixins: [State, Navigation],

    closeOverlay: function () {
        this.transitionTo('root');
    },

    render: function() {

        var viewState = this.getParams().viewState;

        var editing = this.isActive('edit');

        return (
          <div className='main'>
            <Link to="edit">Edit</Link>

            {editing && (
                <Overlay width={1024} onShadeClick={this.closeOverlay}>
                    <Overlay.closeButton onClick={this.closeOverlay} />
                    <Overlay.header>
                        My Overlay
                    </Overlay.header>
                    <Overlay.body>
                        <div>Here is some cool stuff</div>
                    </Overlay.body>
                    <Overlay.footer>
                        <Overlay.footer.right>
                            <Button onClick={this.closeOverlay}>OK</Button>
                        </Overlay.footer.right>
                    </Overlay.footer>
                </Overlay>
            )}

          </div>
        );
    }
});

module.exports = LpOverlayApp;
