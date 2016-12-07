import './../stylus/installBox.styl';

import { InstallButton } from './InstallButton.js';
import { FormBox } from './formBox.js';

let InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            btns: [],
            positionClass: "_footer"
        };
    },
    render: function() {

        let InstallButtons = this.props.btns.map((btn, index) => {
            return (
                <InstallButton key={index} buttonClass={btn.ButtonClass} href={btn.href} positionClass={this.props.positionClass} />
            );
        });
        return (
            <div className={"installBox " + " " + "installBox" + this.props.positionClass}>
                {/*<div className={"install" + " " + "install" + this.props.positionClass}>*/}
                <div className={"installBox-installWrapper" + " " + "installBox-installWrapper" + this.props.positionClass}>
                    <p className="install__title as installBox-installTitle">Установить приложение</p>
                    <div className="install-btnsWrapper as installBox-installButtonsWrapper">
                        {InstallButtons}
                    </div>
                </div>
                <FormBox positionClass={this.props.positionClass} />
            </div>
        );
    }
});

export { InstallBox };