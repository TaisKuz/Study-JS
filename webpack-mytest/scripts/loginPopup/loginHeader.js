import './../../stylus/loginPopup/loginHeader.styl';

export let LoginHeader = React.createClass({
    getDefaultProps: function () {
        return {
            text: "",
            clickHandler: () => {}
        };
    },

    render: function() {
        return (
            <div className="loginHeader">
                <button className="loginHeader-backButton" type="button" onClick={ this.props.clickHandler } />
                { this.props.text }
            </div>
        );
    }
});