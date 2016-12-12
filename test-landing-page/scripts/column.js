import './../stylus/column.styl';

let Column = React.createClass({

    getDefaultProps: function () {
        return {
            iconType: "cherry",
            title: 'Слушайте любую музыку при наличии интернета!',
            description: 'Совершенно бесплатно'
        };
    },

    render: function() {
        return (
            <div className="column">
                <div className="column-iconWrapper">
                    <div className={ "column-icon" + " " + "column-icon_" + this.props.iconType } />
                </div>
                <p className="column-title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
                <p className="column-description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
            </div>
        );
    }
});

export { Column };