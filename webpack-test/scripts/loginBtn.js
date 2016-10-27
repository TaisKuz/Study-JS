export var LoginBtn = React.createClass({



    getDefaultProps: function () {
        return {
            classNames: [
                'btnLoginVk',
                'btnLoginFb',
                'btn-email btnLightBlue',
                'btn-sms btnLightBlue',
                'btnLightBlue'
            ],
            loginBtnText: 'Войти с помощью Вконтакте',
            typebtn: 0
        };
    },

    handleClickVk: function() {
        windowVk = window.open("https://oauth.vk.com/authorize?client_id=3715258&scope=friends,audio,offline,email&response_type=code&redirect_uri=http://zvooq.com/external_systems/vkontakte/oauth_callback",
            "about:blank", "VK | Login").resizeTo(this.windowWidth,this.windowHeight);
    },

    handleClickFb: function() {
        windowFb = window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=111609062204510&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fredirect_uri%3Dhttp%253A%252F%252Fzvooq.com%252Fexternal_systems%252Ffacebook%252Foauth_callback%252FXYHeN488zNVARKNXJLOCjJ4Zsoc.eyJtZXRhIjogeyJyYW5kb20iOiAiMmU1Yzc4Y2Q1NWQ5ZWM3YyIsICJleHBpcmVzIjogMTQ3NzQwMDgyNH0sICJkYXRhIjogeyJjbWQiOiAibG9naW4ifX0%252F%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cpublish_actions%252Cuser_birthday%252Cuser_friends%252Cuser_location%252Cuser_likes%26client_id%3D111609062204510%26ret%3Dlogin%26logger_id%3Da5238a98-98ee-4160-a714-4fe99476c621&cancel_url=http%3A%2F%2Fzvooq.com%2Fexternal_systems%2Ffacebook%2Foauth_callback%2FXYHeN488zNVARKNXJLOCjJ4Zsoc.eyJtZXRhIjogeyJyYW5kb20iOiAiMmU1Yzc4Y2Q1NWQ5ZWM3YyIsICJleHBpcmVzIjogMTQ3NzQwMDgyNH0sICJkYXRhIjogeyJjbWQiOiAibG9naW4ifX0%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=popup&locale=en_GB&logger_id=a5238a98-98ee-4160-a714-4fe99476c621",
            "about:blank", "Facebook").resizeTo(this.windowWidth,this.windowHeight);
    },

    render: function() {

        // var test = this.props.text || this.state.text[this.props.type];

        return (
            <button
                className={"btnsLogin " + this.props.classNames[this.props.typebtn]}
                dangerouslySetInnerHTML={{ __html: this.props.loginBtnText }}
                type={this.props.type}
                onClick={this.props.onClick}
            />
        );
    }
});


export const BUTTONS_TYPE = {
    VK: 0,
    FB: 1,
    EMAIL: 2,
    SMS: 3,
    BLUE: 4
};