import './../stylus/installBox.styl';

import { InstallBtn } from './installBtn.js';
import { FormBox } from './formBox.js';

var InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            btns: [],
            insideFooter: false
        };
    },
    render: function() {
        var footerClass = this.props.insideFooter? " footer__install" : "";
        var installBtns = this.props.btns.map((btn, index) => {
            return (
                <InstallBtn key={index} className={btn.className} href={btn.href} />
            );
        });
        return (
            <div className="installBox">
                <div className={"install" + footerClass} >
                    <p>Установить приложение</p>
                    <div className="btns-wrapper  as install-btnsWrapper">
                        {installBtns}
                    </div>
                </div>
                <FormBox insideFooter={this.props.insideFooter}/>
            </div>
        );
    }
});

export { InstallBox };