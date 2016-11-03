import './../stylus/formBox.styl';

var FormBox = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "footer__"
        };
    },
    render: function() {
        return (
            <div className={"get-phone-email  as   formBox" + " " + this.props.positionClass + "formBox"}>
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