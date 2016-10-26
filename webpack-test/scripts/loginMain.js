import { LoginBtn } from './loginBtn.js';


var LoginMain = React.createClass({

    getDefaultProps: function () {
        return {
            socialBtns: [],
            emailBtns: []
        };
    },

    render: function() {
        var socialBtns = this.props.socialBtns.map((btn, index) => {
            return (
                <LoginBtn key={index} className={btn.className} loginBtnText={btn.loginBtnText} onClick={btn.onClick}/>
            );
        });

        var emailBtns = this.props.emailBtns.map((btns, index) => {
            return (
                <LoginBtn key={index} className={btns.className} loginBtnText={btns.loginBtnText} onClick={btns.onClick}/>
            );
        });

        return (
            <div className="loginMain">
                <div className="loginTitle">Чтобы продолжить, войдите любым удобным для вас способом:</div>
                <div className="loginBtns-content">
                    {socialBtns}
                    <div className="btnStriper"></div>
                    {emailBtns}
                    <p className="loginMain-links">Регистрируясь, вы соглашаетесь с <a href="http://zvooq.com/about/terms" target="_blank">Условиями</a><br/><a href="http://zvooq.com/about/terms" target="_blank">обслуживания</a> и <a href="http://zvooq.com/about/privacy" target="_blank">Правилами хранения личной</a><br/><a href="http://zvooq.com/about/privacy" target="_blank">информации</a></p>
                </div>
            </div>
        );
    }
});

export { LoginMain };