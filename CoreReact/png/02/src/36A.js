ReactDOM.render(
  React.createElement(
    'div',
      null,
      React.createElement(HelloMultiverses, {
        id: 'Vue',
        frameworkName: 'Vue.js',
        title: 'popular among front-end devs'}),
      React.createElement(HelloMultiverses, {
        id: 'sailJS',
        frameworkName: 'sail.js',
        title: 'not too shabby'}),
      React.createElement(HelloMultiverses, {
        id: 'vanilla',
        frameworkName: 'vanilla.js',
        title: 'THE BEST!'})
    ),
    document.getElementById('content')
)
