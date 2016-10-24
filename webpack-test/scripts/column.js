var Column = React.createClass({

    getDefaultProps: function () {
        return {
            src: 'img/icon-cherry.svg',
            alt: 'icon-cherry',
            title: 'Слушайте любую музыку при наличии интернета!',
            description: 'Совершенно бесплатно'
        };
    },

    render: function() {
        return (
            <div className="column">
                <div className="icon-wrapper">
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: this.props.title }} />
                <p dangerouslySetInnerHTML={{ __html: this.props.description }} />
            </div>
        );
    }
});

export { Column };