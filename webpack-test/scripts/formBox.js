var FormBox = React.createClass({
    render: function() {
        return (
            <div className="get-phone-email">
                <p>Получите ссылку для установки на&nbsp;телефон</p>
                <form className="form-phone-email">
                    <input type="text" placeholder="Телефон или Email" />
                    <input type="submit" value="отправить" />
                </form>
            </div>
        );
    }
});

module.exports = FormBox;