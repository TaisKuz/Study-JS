import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "email",
        placeholder: "Ваш email",
    },
    {
        className: "loginInput",
        type: "password",
        placeholder: "Выберите или введите пароль",
    }
];

export var LoginEmail = React.createClass({
    getInitialState: function() {
        return {
            onPageClick: () => {}
        };
    },
    render: function() {
        return (
            <div className="loginEmail">
                <LoginHeader clickHandler={() => {this.props.onPageClick(0)}}/>
                <div className="loginEmail-content">
                    <LoginForm inputs={inputs} typebtn={4} loginBtnText="Зарегистрироваться или войти" type="submit" />
                    <div className="loginEmail-forgot" onClick={this.props.onClickForgot}>Забыли пароль?</div>
                </div>
            </div>
        );
    }
});