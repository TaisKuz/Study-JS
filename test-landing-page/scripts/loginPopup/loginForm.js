import './../../stylus/loginPopup/loginForm.styl';

import { LoginButton } from './loginButton.js';

export let LoginForm = React.createClass({

    getDefaultProps: function () {
        return {
            buttonType: 4,
            loginButtonText: "Продолжить",
            inputs: []
        };
    },

    render: function() {
        let inputs = this.props.inputs.map(( input, index ) => {
            return (
                <input
                    key={ index }
                    className={ input.type === "password" ? "loginForm-password" : "loginForm-input" }
                    defaultValue={ input.defaultValue }
                    placeholder={ input.placeholder }
                    required type={ input.type }
                />
            );
        });

        return (
            <div className="loginForm">
                { inputs }
                <LoginButton buttonType={ this.props.buttonType } type="submit" loginButtonText={ this.props.loginButtonText } />
            </div>
        );
    }
});