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
//codeblock 36A
render() {
  if (this.props.heading) return <h1>Goodbye, cruel world!</h1>
  else return <p>Hello Multiverse(s)!</p>
}
```

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
