import '../stylus/installBoxTop.styl';
import '../stylus/installBoxBottom.styl';

import { InstallButton } from './InstallButton.js';
import { FormBox } from './formBox.js';

let InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            buttons: [],
            positionClass: "Bottom"
        };
    },
    render: function() {

        let
            InstallButtons = this.props.buttons.map(( button, index ) => {
                return (
                    <InstallButton key={ index } buttonClass={ button.buttonType } href={ button.href } positionClass={ this.props.positionClass } />
                );
            }),
            installBoxClass = 'installBox' + this.props.positionClass;

        return (
            <div className={ installBoxClass }>
                <div className={ installBoxClass + '-installWrapper' }>
                    <p className={ installBoxClass + '-installTitle' }>Установить приложение</p>
                    <div className={ installBoxClass + '-installButtonsWrapper' }>
                        { InstallButtons }
                    </div>
                </div>
                <FormBox positionClass={ this.props.positionClass } />
            </div>
        );
    }
});

export { InstallBox };