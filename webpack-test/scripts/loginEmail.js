import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "email",
        placeholder: "Ваш email",
        value: ""
    },
    {
        className: "loginInput",
        type: "password",
        placeholder: "Выберите или введите пароль",
        value: ""
    }
];

var LoginEmail = React.createClass({

    render: function() {
        return (
            <div className="loginEmail">
                <LoginHeader onClick={this.props.onClickBack}/>
                <div className="loginEmail-content">
                    <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Зарегистрироваться или войти" type="submit" />
                    <div className="loginEmail-forgot" onClick={this.props.onClickForgot}>Забыли пароль?</div>
                </div>
            </div>
        );
    }
});

export { LoginEmail };