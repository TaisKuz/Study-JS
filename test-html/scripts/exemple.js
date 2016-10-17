var MainPage = React.createClass({
    getInitialState: function () {
      return {
        id: 0
      };
    },

    getDefaultProps: function () {
      return {
        title: 'DEFAULT',
        description: "I am Good",
        list: []
      };
    },

    clickHandler: function () {
      console.log('CLICK HANDLER');
      this.setState({ id: ++this.state.id });

      this.someVar = [];
    },

    render: function() {

      var items = this.props.list.map((item, index) => {
        return <div key={index}>{item.length}</div>;
      });

      return (
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.description}</div>
          <div onClick={this.clickHandler} >{"State id: " + this.state.id}</div>
          {items}
        </div>
      );
    }           
  });      

  ReactDOM.render(
    <MainPage title="MainPage" list={['One', 'Two', 'Three']}/>,
    document.getElementById('content')
  );

////////////////////////////////////////////////////