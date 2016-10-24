import { LoginMain } from './loginMain.js';
import { LoginEmail } from './loginEmail.js';
import { LoginSms } from './loginSms.js';

var loginContent;

var socialBtns = [
    {
        className: 'btnsLogin btnLoginVk',
        loginBtnText: 'Войти с помощью Вконтакте'
    },
    {
        className: 'btnsLogin btnLoginFb',
        loginBtnText: 'Войти с помощью Facebook'
    }
];

var emailBtns = [
    {
        className: 'btnsLogin btn-email btnLightBlue',
        loginBtnText: 'Через email'
    },
    {
        className: 'btnsLogin btn-sms btnLightBlue',
        loginBtnText: "По коду в SMS</br><small>(бесплатно)</small>"
    }
];

getState();

var Banner = React.createClass({


    render: function() {
        return (
            <div className={"banner"}>
                <div className="loginWhite">
                        {loginContent}
                </div>
            </div>
        );
    }
});

export { Banner };

function getState() {
    "use strict";

    //loginContent = <LoginMain socialBtns={socialBtns} emailBtns={emailBtns} />;
    //loginContent = <LoginSms />;
    loginContent = <LoginEmail />;
}