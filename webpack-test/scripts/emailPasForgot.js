import { LoginForm } from './loginForm.js';
import { LoginHeader } from './loginHeader.js';

var inputs = [
    {
        className: "loginInput",
        type: "email",
        placeholder: "Ваш email"
    }
];

export var EmailPasForgot = React.createClass({
    getInitialState: function() {
        return {
            onPageClick: () => {}
        };
    },
    render: function() {
        return (
            <div className="emailPasForgot">
                <LoginHeader clickHandler={() => {this.props.onPageClick(0)}} text="Забыли пароль?"/>
                <div className="emailPasForgot-content">
                    <LoginForm inputs={inputs} btnClassName="btnsLogin btnLightBlue" loginBtnText="Восстановить пароль" type="submit"/>
                </div>
            </div>
        );
    }
});