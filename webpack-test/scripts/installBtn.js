import './../stylus/installBtn.styl';

var InstallBtn = React.createClass({
    getDefaultProps: function () {
        return {
            className: "btn-app-store",
            href: "https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8"
        };
    },

    render: function() {
        return (
            <div className={this.props.className}>
                <a href={this.props.href} target="_blank"></a>
            </div>
        );
    }
});

export { InstallBtn };