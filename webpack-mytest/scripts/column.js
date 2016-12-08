import './../stylus/column.styl';

let Column = React.createClass({

    getDefaultProps: function () {
        return {
            iconClass: "cherry",
            title: 'Слушайте любую музыку при наличии интернета!',
            description: 'Совершенно бесплатно'
        };
    },

    render: function() {
        return (
            <div className="column">
                <div className="icon-wrapper as column-iconWrapper">
                    <div className={"column-icon " + "column-icon_" + this.props.iconClass} />
                </div>
                <p className="column__title  as column-title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
                <p className="column__description  as column-description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
            </div>
        );
    }
});

export { Column };