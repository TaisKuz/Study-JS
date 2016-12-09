import '../stylus/formBoxTop.styl';
import '../stylus/formBoxBottom.styl';

let FormBox = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "Bottom"
        };
    },
    render: function() {
        let formBoxClass = 'formBox' + this.props.positionClass;
        return (
            <div className={ formBoxClass }>
                <p className={ formBoxClass + '-title' }>Получите ссылку для установки на&nbsp;телефон</p>
                <form className={ formBoxClass + '-emailForm' }>
                    <input className={ formBoxClass + '-inputEmail' } type="text" placeholder="Телефон или Email" />
                    <input className={ formBoxClass + '-submitEmail' } type="submit" value="отправить" />
                </form>
            </div>
        );
    }
});

export { FormBox };