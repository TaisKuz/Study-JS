import { LoginBtn } from './loginBtn.js';

var LoginForm = React.createClass({

    getDefaultProps: function () {
        return {
            btnClassName: "btnsLogin btnLightBlue",
            loginBtnText: "Продолжить",
            inputs: []
        };
    },

    render: function() {

        var inputs = this.props.inputs.map((input, index) => {
            return (
                <input key={index} className={input.className} value={input.value} placeholder={input.placeholder} required type={input.type} spellcheck="false" />
            );
        });

        return (
            <div className="loginForm">
                {inputs}
                <LoginBtn className={this.props.btnClassName} type="submit" loginBtnText={this.props.loginBtnText}/>
            </div>
        );
    }
});

export { LoginForm };