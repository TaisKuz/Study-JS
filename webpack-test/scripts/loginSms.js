import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "phone",
        placeholder: "none",
        value: "+7"
    }
];

var LoginSms = React.createClass({

    render: function() {
        return (
            <div className="loginSms">
                <LoginHeader onClick={this.props.onClickBack} text="Вход по номеру"/>
                <div className="loginSms-content">
                    <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Продолжить" type="submit" />
                    <div className="loginSms-note">
                        Введите ваш номер телефона<br/><br/>
                        Пример для России:<br/>+79991234567
                    </div>
                </div>
            </div>
        );
    }
});

export { LoginSms };