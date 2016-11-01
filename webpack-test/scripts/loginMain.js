import './../stylus/loginMain.styl';

import { LoginBtn, BUTTONS_TYPE } from './loginBtn.js';

export var LoginMain = React.createClass({

    getDefaultProps: function () {
        return {
            socialBtns: [
                { typebtn: 0 },
                { typebtn: 1 }
            ],

            emailBtns: [
                {
                    typebtn: 2,
                    id: 1
                },
                {
                    typebtn: 3,
                    id: 2
                }
            ],
            onPageClick: () => {}
        };
    },

    render: function() {
        var socialBtns = this.props.socialBtns.map((item, index) => {
            return (
                <LoginBtn key={index} typebtn={item.typebtn} />
            );
        });

        var emailBtns = this.props.emailBtns.map((item, index) => {
            return (
                <LoginBtn key={index} typebtn={item.typebtn}
                    onClick={() => { this.props.onPageClick(item.id) }}
                />
            );
        });

        return (
            <div className="loginMain">
                <div className="loginTitle">Чтобы продолжить, войдите любым удобным для вас способом:</div>
                <div className="loginBtns-content">
                    {socialBtns}
                    <div className="btnStriper"></div>
                    {emailBtns}
                    <p className="loginMain-links">
                        Регистрируясь, вы соглашаетесь с <a href="http://zvooq.com/about/terms" target="_blank">Условиями</a>
                        <br/><a href="http://zvooq.com/about/terms" target="_blank">обслуживания</a> и
                        <a href="http://zvooq.com/about/privacy" target="_blank">Правилами хранения личной</a>
                        <br/><a href="http://zvooq.com/about/privacy" target="_blank">информации</a></p>
                </div>
            </div>
        );
    }
});