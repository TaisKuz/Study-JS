import { InstallBtn } from './installBtn.js';
import { FormBox } from './formBox.js';

var InstallBox = React.createClass({
    getDefaultProps: function () {
        return {
            btns: []
        };
    },
    render: function() {
        var installBtns = this.props.btns.map((btn, index) => {
            return (
                <InstallBtn key={index} className={btn.className} href={btn.href} />
            );
        });
        return (
            <div className="installBox">
                <div className="install">
                    <p>Установить приложение</p>
                    <div className="btns-wrapper">
                        {installBtns}
                    </div>
                </div>
                <FormBox />
            </div>
        );
    }
});

export { InstallBox };