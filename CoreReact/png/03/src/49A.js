//49.A
let helloMultiversesReactElement = <h1>Hello Multiverse</h1>
class HelloMultiverses extends React.Component {
  render() {
    return <div>
    {helloMultiversesReactElement}
    {helloMultiversesReactElement}
    </div>
  }
}
ReactDOM.render(
  <HelloMultiverses/>,
  document.getElementById('content')
)
