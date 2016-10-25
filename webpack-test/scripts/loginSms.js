import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

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

                <LoginHeader onClick={this.props.onClickBack}/>
                форма регистрации по Sms
                <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Продолжить" type="submit" />
            </div>
        );
    }
});

export { LoginSms };