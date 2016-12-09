import '../stylus/installBoxTop.styl';
import '../stylus/installBoxBottom.styl';

import { InstallButton } from './InstallButton.js';
import { FormBox } from './formBox.js';

let InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            btns: [],
            positionClass: "Bottom"
        };
    },
    render: function() {

        let
            InstallButtons = this.props.btns.map(( btn, index ) => {
                return (
                    <InstallButton key={ index } buttonClass={ btn.buttonType } href={ btn.href } positionClass={ this.props.positionClass } />
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