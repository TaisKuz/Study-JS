import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "email",
        placeholder: "Ваш email"
    }
];

var EmailPasForgot = React.createClass({

    render: function() {
        return (
            <div className="emailPasForgot">
                <LoginHeader onClick={this.props.onClickBack} text="Забыли пароль?"/>
                <div className="emailPasForgot-content">
                    <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Восстановить пароль" type="submit"/>
                </div>
            </div>
        );
    }
});

export { EmailPasForgot };