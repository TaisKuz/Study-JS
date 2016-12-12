import '../../stylus/loginPopup/emailPasswordForgot.styl';

import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

let inputs = [
    {
        type: "email",
        placeholder: "Ваш email"
    }
];

export let EmailPasswordForgot = React.createClass({
    getInitialState: function() {
        return {
            onPageClick: () => {}
        };
    },
    render: function() {
        return (
            <div className="emailPasswordForgot">
                <LoginHeader clickHandler={() => { this.props.onPageClick(0) }} text="Забыли пароль?" />
                <div className="emailPasswordForgot-content">
                    <LoginForm inputs={ inputs } buttonType={ 6 } type="submit" />
                </div>
            </div>
        );
    }
});