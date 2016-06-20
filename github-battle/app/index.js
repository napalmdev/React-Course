var React = require('react');
var ReactDOM = require('react-dom');

var Container = React.createClass({
  render: function () {
    var nomes = ['Denis', 'Rex', 'Piririca', 'Guto'];

    return (
      <List nomes={nomes} />
    );
  }
});



var List = React.createClass({
  render: function () {
    var listNames = this.props.nomes.map( function (el) {
      return <li> {el} </li>;
    });

    return (
      <div>
        <h1> Lista </h1>
        <ul>
          {listNames}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);
