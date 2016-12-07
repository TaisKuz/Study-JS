import './../../stylus/loginPopup/loginPopup.styl';

import { LoginMain } from './loginMain.js';
import { LoginEmail } from './loginEmail.js';
import { LoginSms } from './loginSms.js';
import { EmailPasForgot } from './emailPasForgot.js';

export var LoginPopup = React.createClass({
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
              EmailPasForgot
          ],
          onClickClose: () => {}
      };
    },

    pageClickHandler: function(id) {
        this.setState({ currentView: id });
    },

    render: function() {
        let Page = this.props.views[this.state.currentView];

        return (
            <div className="loginPopup loginPopup_up banner">
                <div className="banner-inner">
                    <div className="banner-scroller">
                        <div className="banner-pointer" onClick={this.props.onClickClose}></div>
                        <div className="banner-window">
                            <Page onPageClick={this.pageClickHandler} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
