class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return React.createElement(
      'span',
      null,
      `Current Data and Time is ${dateTimeNow}.`
    )
  }
}
