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