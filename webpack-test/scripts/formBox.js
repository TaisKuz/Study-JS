import './../stylus/formBox.styl';

var FormBox = React.createClass({
    render: function() {
        return (
            <div className="get-phone-email    formBox">
                <p>Получите ссылку для установки на&nbsp;телефон</p>
                <form className="form-phone-email     phoneEmail-form">
                    <input className="     phoneEmail-form__input" type="text" placeholder="Телефон или Email" />
                    <input className="     phoneEmail-form__inputSubmit" type="submit" value="отправить" />
                </form>
            </div>
        );
    }
});

export { FormBox };