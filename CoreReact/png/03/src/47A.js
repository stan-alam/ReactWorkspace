class HelloMultiverses extends React.Component {
  render() {
    return React.createElement('div',
    null,
    React.createElement('h1', null, '1. Hello Multiverse(s)!'),
    React.createElement('h1', null, '2. Hola, Multiverse(s)!')
  }
}
ReactDOM.render(
  React.createElement(HelloMultiverses, null),
  document.getElementById('content')
)
