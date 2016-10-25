import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "text",
        placeholder: "Ваш email",
        value: ""
    },
    {
        className: "loginInput",
        type: "text",
        placeholder: "Выберите или введите пароль",
        value: ""
    }
];

var LoginEmail = React.createClass({

    render: function() {
        return (
            <div className="loginEmail">

                <LoginHeader onClick={this.props.onClickBack}/>

                <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Зарегистрироваться или войти" type="submit" />
            </div>
        );
    }
});

export { LoginEmail };