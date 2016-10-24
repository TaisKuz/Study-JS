import { LoginForm } from './loginForm.js';

var inputs = [
    {
        className: "loginInput",
        type: "text",
        placeholder: "none",
        value: "+7"
    }
];

var LoginSms = React.createClass({

    render: function() {
        return (
            <div className="loginSms">

                стрелочка возврата на главную форму<br/>
                форма регистрации по Sms
                <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Продолжить" />
            </div>
        );
    }
});

export { LoginSms };