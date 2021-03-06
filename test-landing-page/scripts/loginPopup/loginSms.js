import './../../stylus/loginPopup/loginSms.styl';

import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

let inputs = [
    {
        type: "tel",
        placeholder: "none",
        defaultValue: "+7"
    }
];

export let LoginSms = React.createClass({
    getInitialState: function() {
        return {
            onPageClick: () => {}
        };
    },
    render: function() {
        return (
            <div className="loginSms">
                <LoginHeader clickHandler={ () => { this.props.onPageClick( 0 ) } } text="Вход по номеру" />
                <div className="loginSms-content">
                    <LoginForm inputs={ inputs } buttonType={ 5 } type="submit" />
                    <div className="loginSms-note">
                        Введите ваш номер телефона<br /><br />
                        Пример для России:<br />+79991234567
                    </div>
                </div>
            </div>
        );
    }
});