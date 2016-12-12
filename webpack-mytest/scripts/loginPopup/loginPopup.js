import './../../stylus/loginPopup/loginPopup.styl';

import { LoginMain } from './loginMain.js';
import { LoginEmail } from './loginEmail.js';
import { LoginSms } from './loginSms.js';
import { EmailPasswordForgot } from './emailPasswordForgot.js';

export let LoginPopup = React.createClass({
    getInitialState: function() {
        return {
            currentView: 0
        };
    },

    getDefaultProps: function() {
      return {
          views: [
              LoginMain,
              LoginEmail,
              LoginSms,
              EmailPasswordForgot
          ],
          onClickClose: () => {}
      };
    },

    pageClickHandler: function( id ) {
        this.setState({ currentView: id });
    },

    render: function() {
        let Page = this.props.views[ this.state.currentView ];

        return (
            <div className="loginPopup">
                <div className="loginPopup-bannerInner">
                    <div className="loginPopup-bannerScroller">
                        <div className="loginPopup-bannerPointer" onClick={ this.props.onClickClose } />
                        <div className="loginPopup-bannerWindow">
                            <Page onPageClick={ this.pageClickHandler } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
