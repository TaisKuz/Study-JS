
var LoginHeader = React.createClass({
    getDefaultProps: function () {
        return {
            text: ""
        };
    },

    render: function() {
        return (
            <div className="loginHeader">
                <button className="loginHeader-back" type="button" onClick={this.props.onClick}></button>
                {this.props.text}
            </div>
        );
    }
});

export { LoginHeader };