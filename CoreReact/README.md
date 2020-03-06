## Core React 2019

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%202.png" width="80%" height="80%">
</a>

community resources:

enhance functionality, work with immutable data (https://github.com/kolodny/immutability-helper), and perform testing.


Renderer for the blessed (https://github.com/chjj/blessed) terminal interface: http://github.com/Yomguithereal/react-blessed


Renderer for the ART library (https://github.com/sebmarkbage/art): https://github.com/reactjs/react-art


Renderer for <canvas>: https://github.com/Flipboard/react-canvas


Renderer for the 3D library using three.js (http://threejs.org): https://github.com/Izzimach/react-three


Renderer for virtual reality and interactive 360 experiences: https://facebook.github.io/react-vr


List of React components: https://github.com/brillout/awesome-react-components and http://devarchy.com/react-components


Set of React components that implement the Google Material Design specification (https://design.google.com): http://react-toolbox.com

Material Design React components: www.material-ui.com

Collection of React components for Office and Office 360 experiences (http://dev.office.com/fabric#/components) using the Office Design Language: https://github.com/OfficeDev/office-ui-fabric-react

Opinionated catalog of open source JS (mostly React) packages: https://js.coach

Catalog of React components: https://react.rocks

Khan Academy React components: https://khan.github.io/react-components

Registry of React components: www.reactjsx.com

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%208.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%209A.png" width="80%" height="80%">
</a>

```text

Screencap 8.B  

```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/01/coreReact01%20-%209B.png" width="80%" height="80%">
</a>

## 02

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%202A.png" width="80%" height="80%">
</a>

```text
graph 29.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%202B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%203A.png" width="80%" height="80%">
</a>

```text
screencap 29.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%203B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%204A.png" width="80%" height="80%">
</a>

```js
//codeblock 30A
let h1 = React.createElement('h1', null, 'Hello Multiverses!')
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('content')
)
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%208.png" width="80%" height="80%">
</a>

```js
//codeblock 32.A
let h1 = React.createElement('h1', null, 'Hello Multiverse(s)!')
class HelloMultiverses extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
    }
  }

ReactDOM.render(
  React.createElement(HelloMultiverses, null),
  document.getElementById('content'))
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%209.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2010A.png" width="80%" height="80%">
</a>

```text
screencap 33A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2010B.png" width="80%" height="80%">

</a>

```js
//codeblock 33A
ReactDOM.render(
  React.createElement (
    'div',
    null,
    React.createElement(HelloMultiverses!),
    React.createElement(HelloMultiverses!),
    React.createElement(HelloMultiverses!)
  ),
  document.getElementById('content')
)
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2010C.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2011.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2012.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2014A.png" width="80%" height="80%">
</a>

```js
//codeblock 35A
class HelloMultiverses extends React.Component {
  render() {
    console.log(Object.isFrozen(this.props))
    return React.createElement('div', null, h1, h1)
  }
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2014B.png" width="80%" height="80%">
</a>

```js
//codeblock 35B
render() {
  if (this.props.heading) return <h1>Goodbye, cruel world!</h1>
  else return <p>Hello Multiverse(s)!</p>
}
```
<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2015.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2016A.png" width="80%" height="80%">
</a>

```text
graph 37.A
```
<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2016B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2017A.png" width="80%" height="80%">
</a>

```js
//codeblock 36.A
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
```
<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2017B.png" width="80%" height="80%">
</a>

```js
//codeblock 37.A
class HelloMultiverses extends React.Component {
  render()
    return React.createElement(
      'h1',
      null,
        'Hola! ' + this.props.frameworkName + ' multiverses!'
    )
  }
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2018A.png" width="80%" height="80%">
</a>

```js
//codeblock 38.A
class HelloMultiverses extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hola! ' + this.props.frameworkName + ' multiverses!'
    )
  }
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2018B.png" width="80%" height="80%">
</a>

```text
screencap 39.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2019.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/02/coreReact02%20-%2020.png" width="80%" height="80%">
</a>

# 03

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%202A.png" width="80%" height="80%">
</a>

```jsx

// codeblock 42.A 43.A
React.createElement(
  "div",
  null,
  React.createElement("HelloMultiverses, null),
  React.createElement("br", null),
  React.createElement(
    "a",
    { href: "http://ghostfish.io" },
    "G H O S T F i S H_IO"
  )
)
```

```JSX

//codeblock 43.B
"use strict";

React.createElement(
  "div",
  null,
  " ",
  React.createElement("br", null),
  " ",
  React.createElement(
    "a",
    { href: "http://ghostfish.io" ),
    "G H O S T F i S H_IO"
  ),
  " "
);
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%202B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%203edit.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%205A.png" width="80%" height="80%">
</a>

```js
// codeblock 45.A
React.createElement(
  name,
  {key1: value1, key2: value2, ...},
  child1, child2, child3, ..., childN
)  
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%205B.png" width="80%" height="80%">
</a>

```js
// codeblock 45.B  
<name key1=value1 key2=value2 ...>
  <child1/>
  <child2/>
  <child3/>
  ...
  <childN/>
</name>
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%205C.png" width="80%" height="80%">
</a>

```js
// codeblock 46.A  - 46-.B
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%205D.png" width="80%" height="80%">
</a>

```js
// codeblock 46.A
ReactDOM.render(
  React.createElement('h1', null, 'Hello Multiverse(s)!'),
  document.getElementById('content')
)
```

```js
// codeblock 46.B
//JSX
ReactDOM.render(
  <h1> Hello, Multiverse(s)! </h1>,
  document.getElementById('content')
)// jsx version of 46A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%206A.png" width="80%" height="80%">
</a>

```js
// codeblock 46.C
let helloMultiversesReactElement = <h1> Hello, multiverse(s)!</h1>
ReactDOM.render(
  helloMultiversesReactElement,
  document.getElementById('content')
)
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%206B.png" width="80%" height="80%">
</a>

```js
// codeblock 46.D-47
// --47A
class HelloMultiverses extends React.Component {
  render() {
    return (
      </div>
        <h1>1. Hello multiverse(s)! </h1>
        <h1>2. Hello multiverse(s)! </h1>
      </div>
    )
  }
}
ReactDOM.render (
  <HelloMultiverses/>,
  document.getElementById('content')
)
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%206C.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%207A.png" width="80%" height="80%">
</a>

```js
// codeblock 47.B
render() {
  return (
    <div>
    </div>
  )
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%207B.png" width="80%" height="80%">
</a>

```js
// codeblock 47.C
render() {
  return <div>
  </div>
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%207C.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%208A.png" width="80%" height="80%">
</a>

```js
//48.A
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
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%208B.png" width="80%" height="80%">
</a>

```js
//48.B
class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return <span>Current Date and Time is {dateTimeNow}.</span>
   )
  }
}
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%209A.png" width="80%" height="80%">
</a>

```js
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
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%209B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2010A.png" width="80%" height="80%">
</a>

```js
//49.B
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2010B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2011.png" width="80%" height="80%">
</a>

```js
//50.A
```
<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2012.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2014.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2015A.png" width="80%" height="80%">
</a>

```js
//51.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2015B.png" width="80%" height="80%">
</a>

```js
//51.B
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2016A.png" width="80%" height="80%">
</a>

```js
//51.C- 52
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2016B.png" width="80%" height="80%">
</a>

```js
//52.A- 53
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2016C.png" width="80%" height="80%">
</a>

```js
//53.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2017A.png" width="80%" height="80%">
</a>

```js
//54.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2017B.png" width="80%" height="80%">
</a>

```text
Screencap 54.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2018.png" width="80%" height="80%">
</a>

```js
//55.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2019.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2020.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2021A.png" width="80%" height="80%">
</a>

```js
//56.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2021B.png" width="80%" height="80%">
</a>

```js
//56B-57
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2021C.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2022A.png" width="80%" height="80%">
</a>

```js
//57.A
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2022B.png" width="80%" height="80%">
</a>

```js
//57.B
```

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2022C.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2023.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/03/coreReact03%20-%2024.png" width="80%" height="80%">
</a>


```js
//58.A
class StansReactComponent extends React.Component {
  render() {
    //not jsx :use a variable with an if/else or teranry
    return (
      // JSX: prints result of ternary or expression with {}
    )
  }
}
```

# 04

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%202.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%208.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%209.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2010.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2011.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2012.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2014.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2015.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2016.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/04/coreReact04%20-%2017.png" width="80%" height="80%">
</a>

# Deprecated notes - 07.25.2019

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/svg/01/coreReact-0.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/svg/01/coreReact-1.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/svg/01/coreReact-2.svg" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/svg/01/coreReact-5.svg" width="80%" height="80%">
 </a>

 <a>
    <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%206A.png" width="80%" height="80%">
</a>

<a>
    <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%206B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%207A.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%207B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%208.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%209.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2010.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2011.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2012A.png" width="80%" height="80%">
</a>

```js
//code stub - 02 - 03
```
<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2012B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2013.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2014.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2015A.png" width="80%" height="80%">
</a>

```js
//code stub - 03 [9]
```
<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2015B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2016A.png" width="80%" height="80%">
</a>

```js
//code stub - 04 [10]
```
<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2016B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2017.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2018.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2019A.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2019B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2020.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2021.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2022.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2023.png" width="80%" height="80%">
</a>

```js
//code stub - 12 [1974]
```
<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2024A.png" width="80%" height="80%">
</a>

```js
//code stub - 13 [2004]
```
<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2024B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2025A.png" width="80%" height="80%">
</a>

```js
//code stub - 14 [2025]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2025B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2026.png" width="80%" height="80%">
</a>

```js
//code stub - 16 [2051]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2027A.png" width="80%" height="80%">
</a>

```js
//code stub - 17 [2057]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2027B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2028A.png" width="80%" height="80%">
</a>

```js
//code stub - 18 [2071]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2028B.png" width="80%" height="80%">
</a>

```js
//code stub - 19 [2085]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2028C.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2029.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2030A.png" width="80%" height="80%">
</a>

```js
//code stub - 20 [2196]
```

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2030B.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2031.png" width="80%" height="80%">
</a>

<a>
   <img src="https://github.com/stan-alam/ReactWorkspace/blob/develop/CoreReact/png/coreReact%20-%2032.png" width="80%" height="80%">
</a>
