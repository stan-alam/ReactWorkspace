## Objectives: In chap01

  * To learn the difference between imperative and declarative programming.

  * To learn React components and their instances, and how React uses elements to control the UI flow

  * To learn how React changes the way web apps are built, enforcing a different new concept of separation of concerns, and the reason behind its unpopular design choice.

  * To learn why people feel the JavaScript Fatigue and what you the develop can do to avoid the most common errors they can make when approaching the React ecosystem.


## Declarative programming

React enforces a declarative programming paradigm.

Imperative programming is a way of describing how things work, while **declarative is a way of describing what you wish to achieve.**

Impactive program are like instructions: e.g. instructions to the robot bartender.

  * Take a glass from the shelf
  * Put the glass in front of the draft
  * Pull down the handle until the glass is full
  * Pass the glass to the customer

#
**declarative programming would just say: "Beer, please.**

**The declarative approach of asking for a beer assumes the bartender knowns how to serve one, and that it is an important aspect of the way declarative programming works**

e.g. A JS function that, given an array of uppercase strings, returns an array with the same strings in lowercase:

```Javascript

 toLowerCase(['FOO', 'BAR']) // ['foo', 'bar']

 ```

**An imperative function to solve the problem would be implemented as follows:**

```Javascript

   const toLowerCase = input => {
     const output = []
     for(let i = 0; i < input.length; i++) {
     	output.push(input[i].toLowerCase())

     }
 //	console.log(JSON.stringify(output));

   	return output

   }
```

Create an empty array to contain the results. Then, the functions loops through all the elements of the input array and pusses the lowercase values into the empty array. Finally, the output array gets returned.

A declarative function would look as follows:

```Javascript
const toLowerCase = input => input.map(
  value => value.toLowerCase()
  )

```
The items of the input array are passed to a map function, which returns a new array containing lowercase values.

Differences to note:
The imperative example is less elegant and it requires more effort to be understood. The declarative is easier to read ( terser ), which can make a big difference in big codes bases, in which maintainability is crucial.

**In the declarative programming example, there is no need to use variables nor to keep their values updated during the execution. Declarative programming, in fact, tends to avoid creating and mutating state.**

JS implementation of using Googe Maps SDK
```Javascript
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng,
})

const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'hola, multiverso!'
})

marker.setMap(map)
```

This example shows how this type of coding is clearly imperative, because all instructions needed to create the map, and create the marker and attach tit to the map are described inside the code, one after the other.

A React component would look like this :

```Javascript

<Gmaps zoom={4} center={myLatLng}>
	<Marker position={myLatLng} hold, multiverso! />

```

In **declarative programming**, the develop only describe what they want to achieve and there's no need to list all the steps to make it work.

The fact that React offers a declarative approach makes it easy to use, and  consequently, the resulting code is simple, which often leads to fewer bugs and more maintainability.


##React Elements

The **Element**: Whenever you call createClass, extend component, or simply declare a stateless function, you are creating a component. React manages all the instances of your components at runtime, and there can be more than one instance of the same component in memory at a given time.

Since React follows declarative paradigm there is no need to tell it how to interact with the DOM. You just declare what you want to see on the screen and React does the job for you.

Most UI libraries work the opposite way: They leave the responsibility of keeping the interface updated to the develop, who has to manage the creation and destruction of the DOM elements manually.

To control the UI flow, React uses a particular object, called the **element**, which describes what has to be show on the screen. These immutable objects are much simpler compared to the components and their instances, and contain only the information that is strictly needed to represent the interface.

Example of an element:

```Javascript
{
type: Title,
props: {
	color : 'red',
	children: 'Holla, Mundo'
	}
}

```

In React, along with a **type** there is also another special property, called **children**, which is optional and represents the direct descendant of the element.

The type is important because it tells React how to deal with the element itself. In fact, if the type is a string, the element represents a **DOM node**, while if the type is a function, the element is a **component.**

**DOM elements and components can be nested with each other, to represent the render trea:

```Javascript

{
    type: Title,
    props: {
        color: 'red',
        children: {,
            type: 'h1',
            props: {
                children: 'Hello, H1'
            }
        }
    }
}

```

