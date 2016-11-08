import './../../stylus/loginPopup/loginHeader.styl';

export var LoginHeader = React.createClass({
    getDefaultProps: function () {
        return {
            text: "",
            clickHandler: () => {}
        };
    },

    render: function() {
        return (
            <div className="loginHeader">
                <button className="loginHeader-back__button " type="button" onClick={this.props.clickHandler} />
                {this.props.text}
            </div>
        );
    }
});