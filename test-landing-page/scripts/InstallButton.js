import '../stylus/installButtonTop.styl';
import '../stylus/installButtonBottom.styl';

let InstallButton = React.createClass({
    getDefaultProps: function () {
        return {
            positionClass: "Top",
            buttonType: "apple",
            href: "https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8"
        };
    },

    render: function() {
        let buttonClass = 'installButton' + this.props.positionClass;
        return (
            <div className={ buttonClass + " " + buttonClass + "-" + this.props.buttonType }>
                <a className={ buttonClass + "-" + this.props.buttonType + "Link" } href={this.props.href} target="_blank" />
            </div>
        );
    }
});

export { InstallButton };