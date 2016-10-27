import { LoginBtn, BUTTONS_TYPE } from './loginBtn.js';

export var LoginMain = React.createClass({

    getDefaultProps: function () {
        return {
            socialBtns: [
                {
                    loginBtnText: 'Войти с помощью Вконтакте',
                    typebtn: 0

                },
                {
                    loginBtnText: 'Войти с помощью Facebook',
                    typebtn: 1
                }],

            emailBtns: [
                {
                    loginBtnText: 'Через email',
                    typebtn: 2,
                    id: 1
                },
                {
                    loginBtnText: "По коду в SMS</br><small>(бесплатно)</small>",
                    typebtn: 3,
                    id: 2
                }
            ],
            onPageClick: () => {}
        };
    },
    clickHandler() {

    },
    render: function() {
        var socialBtns = this.props.socialBtns.map((item, index) => {
            return (
                <LoginBtn
                    key={index}
                    loginBtnText={item.loginBtnText}
                    onClick={this.clickHandler}
                    typebtn={item.typebtn}
                />
            );
        });

        var emailBtns = this.props.emailBtns.map((item, index) => {
            return (
                <LoginBtn key={index} typebtn={item.typebtn} loginBtnText={item.loginBtnText}
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