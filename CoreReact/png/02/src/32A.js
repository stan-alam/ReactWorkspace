let h1 = React.createElement('h1', null, 'Hello Multiverse(s)!')
class HelloMultiverses extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
    }
  }
  
ReactDOM.render(
  React.createElement(HelloMultiverses, null),
  document.getElementById('content')
