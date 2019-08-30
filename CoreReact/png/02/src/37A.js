class HelloMultiverses extends React.Component {
  render()
    return React.createElement(
      'h1',
      null,
        'Hola! ' + this.props.frameworkName + ' multiverses!'
    )
  }
}
