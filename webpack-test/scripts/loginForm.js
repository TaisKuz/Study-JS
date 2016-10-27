import { LoginBtn } from './loginBtn.js';

export var LoginForm = React.createClass({

    getDefaultProps: function () {
        return {
            typebtn: 4,
            loginBtnText: "Продолжить",
            inputs: []
        };
    },

    render: function() {

        var inputs = this.props.inputs.map((input, index) => {
            return (
                <input key={index} className={input.className} defaultValue={input.defaultValue} placeholder={input.placeholder} required type={input.type} />
            );
        });

        return (
            <div className="loginForm">
                {inputs}
                <LoginBtn typebtn={this.props.typebtn} type="submit" loginBtnText={this.props.loginBtnText}/>
            </div>
        );
    }
});