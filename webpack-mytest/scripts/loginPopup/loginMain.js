import './../../stylus/loginPopup/loginMain.styl';

import { LoginButton, BUTTONS_TYPE } from './loginButton.js';

export let LoginMain = React.createClass({

    getDefaultProps: function () {
        return {
            socialButtons: [
                { buttonType: 0 },
                { buttonType: 1 }
            ],

            emailButtons: [
                {
                    buttonType: 2,
                    id: 1
                },
                {
                    buttonType: 3,
                    id: 2
                }
            ],
            onPageClick: () => {}
        };
    },

    render: function() {
        let socialButtons = this.props.socialButtons.map((item, index) => {
            return (
                <LoginButton key={ index } buttonType={ item.buttonType } />
            );
        });

        let emailButtons = this.props.emailButtons.map((item, index) => {
            return (
                <LoginButton
                    key={ index }
                    buttonType={ item.buttonType }
                    onClick={ () => { this.props.onPageClick(item.id) }}
                />
            );
        });

        return (
            <div className="loginMain">
                <div className="loginMain-title">Чтобы продолжить, войдите любым удобным для вас способом:</div>
                <div className="loginMain-loginButtonsWrapper">
                    { socialButtons }
                    <div className="loginMain-buttonsStriper" />
                    { emailButtons }
                    <p className="loginMain-linksWrapper">
                        Регистрируясь, вы соглашаетесь с&nbsp;
                        <a className="loginMain-link"  href="http://zvooq.com/about/terms" target="_blank">Условиями</a>
                        <br /><a className="loginMain-link" href="http://zvooq.com/about/terms" target="_blank">обслуживания</a> и&nbsp;
                        <a className="loginMain-link" href="http://zvooq.com/about/privacy" target="_blank">Правилами хранения личной</a>
                        <br /><a className="loginMain-link" href="http://zvooq.com/about/privacy" target="_blank">информации</a>
                    </p>
                </div>
            </div>
        );
    }
});