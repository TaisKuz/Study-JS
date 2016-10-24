var LoginBtn = React.createClass({

    getDefaultProps: function () {
        return {
            className: 'btnsLogin btnLoginVk',
            loginBtnText: 'Войти с помощью Вконтакте'
        };
    },

    render: function() {
        return (
            <button className={this.props.className} dangerouslySetInnerHTML={{ __html: this.props.loginBtnText }}>
            </button>
        );
    }
});

export { LoginBtn };