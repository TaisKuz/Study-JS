import '../stylus/installButton.styl';

let InstallButton = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "_header",
            buttonClass: "-apple",
            href: "https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8"
        };
    },

    render: function() {
        return (
            <div className={"installButton " + "installButton" + this.props.buttonClass + " " + "installButton" + this.props.buttonClass + this.props.positionClass }>
                <a className={"installButton" + this.props.buttonClass + "Link" + " " + "installButton" + this.props.buttonClass + "link"+ this.props.positionClass} href={this.props.href} target="_blank" />
            </div>
        );
    }
});

export { InstallButton };