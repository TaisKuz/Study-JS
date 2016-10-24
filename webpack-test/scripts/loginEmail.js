import { LoginForm } from './loginForm.js';

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

                стрелочка возврата на главную форму<br/>
                форма регистрации по e-mail
                <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Зарегистрироваться или войти"  />
            </div>
        );
    }
});

export { LoginEmail };