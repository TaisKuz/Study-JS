
var LoginHeader = React.createClass({

    render: function() {
        return (
            <div className="loginHeader">
                <button className="loginHeader-back" type="button" onClick={this.props.onClick}></button>
            </div>
        );
    }
});

export { LoginHeader };