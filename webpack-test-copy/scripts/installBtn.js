import './../stylus/installBtn.styl';

var InstallBtn = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "header__",
            className: "btn-app-store",
            href: "https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8"
        };
    },

    render: function() {
        return (
            <div className={"installBtn "+ this.props.className + " " + this.props.positionClass + "installBtn"}>
                <a href={this.props.href} target="_blank"></a>
            </div>
        );
    }
});

export { InstallBtn };