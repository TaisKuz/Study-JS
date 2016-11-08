import './../../stylus/loginPopup/emailPasForgot.styl';

import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        type: "email",
        placeholder: "Ваш email"
    }
];

export var EmailPasForgot = React.createClass({
    getInitialState: function() {
        return {
            onPageClick: () => {}
        };
    },
    render: function() {
        return (
            <div className="emailPasForgot">
                <LoginHeader clickHandler={() => {this.props.onPageClick(0)}} text="Забыли пароль?"/>
                <div className="emailPasForgot-content">
                    <LoginForm inputs={inputs} typebtn={6} type="submit"/>
                </div>
            </div>
        );
    }
});