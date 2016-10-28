import { LoginMain } from './loginMain.js';
import { LoginEmail } from './loginEmail.js';
import { LoginSms } from './loginSms.js';
import { EmailPasForgot } from './emailPasForgot.js';

export var Banner = React.createClass({
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
            <div className={this.props.className}>
                <div className="banner-gray">
                    <div className="banner-scroller">
                        <div className="banner-pointer" onClick={this.props.onClickClose}></div>
                        <div className="loginWhite">
                            <Page onPageClick={this.pageClickHandler} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
