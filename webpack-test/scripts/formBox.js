import './../stylus/formBox.styl';

var FormBox = React.createClass({
    getDefaultProps: function () {
        return {
            insideFooter: false
        };
    },
    render: function() {
        var footerClass = this.props.insideFooter? " footer__formBox" : "";
        return (
            <div className={"get-phone-email  as   formBox" + footerClass}>
                <p>Получите ссылку для установки на&nbsp;телефон</p>
                <form className="form-phone-email  as   phoneEmail-form">
                    <input className="  as   phoneEmail-form__input" type="text" placeholder="Телефон или Email" />
                    <input className="  as   phoneEmail-form__submit" type="submit" value="отправить" />
                </form>
            </div>
        );
    }
});

export { FormBox };