class HelloMultiverses extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hola! ' + this.props.frameworkName + ' multiverses!'
    )
  }
}
