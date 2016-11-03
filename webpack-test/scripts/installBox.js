import './../stylus/installBox.styl';

import { InstallBtn } from './installBtn.js';
import { FormBox } from './formBox.js';

var InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            btns: [],
            positionClass: "footer__"
        };
    },
    render: function() {

        var installBtns = this.props.btns.map((btn, index) => {
            return (
                <InstallBtn key={index} className={btn.className} href={btn.href} positionClass={this.props.positionClass} />
            );
        });
        return (
            <div className={"installBox " + " " + this.props.positionClass + "installBox"}>
                <div className={"install" + " " + this.props.positionClass + "install"} >
                    <p>Установить приложение</p>
                    <div className="btns-wrapper  as install-btnsWrapper">
                        {installBtns}
                    </div>
                </div>
                <FormBox positionClass={this.props.positionClass}/>
            </div>
        );
    }
});

export { InstallBox };