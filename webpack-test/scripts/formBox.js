import './../stylus/formBox.styl';

var FormBox = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "footer__"
        };
    },
    render: function() {
        return (
            <div className={"formBox" + " " + this.props.positionClass + "formBox"}>
                <p className="formBox__title">Получите ссылку для установки на&nbsp;телефон</p>
                <form className="phoneEmail-form">
                    <input className="phoneEmail-form__input" type="text" placeholder="Телефон или Email" />
                    <input className="phoneEmail-form__submit" type="submit" value="отправить" />
                </form>
            </div>
        );
    }
});

export { FormBox };