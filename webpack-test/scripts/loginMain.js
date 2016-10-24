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
                <LoginBtn key={index} className={btn.className} loginBtnText={btn.loginBtnText} />
            );
        });

        var emailBtns = this.props.emailBtns.map((btns, index) => {
            return (
                <LoginBtn key={index} className={btns.className} loginBtnText={btns.loginBtnText} />
            );
        });

        return (
            <div className="loginMain">
                <p>Чтобы продолжить, войдите любым удобным для вас способом:</p>
                {socialBtns}
                <div className="btnStriper"></div>
                {emailBtns}
                <p className="loginMain-links">Регистрируясь, вы соглашаетесь с <a href="http://zvooq.com/about/terms" target="_blank">Условиями обслуживания</a> и <a href="http://zvooq.com/about/privacy" target="_blank">Правилами хранения личной информации</a></p>
            </div>
        );
    }
});

export { LoginMain };