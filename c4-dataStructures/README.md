## Data sets

Javascript provides a data type specifically to store sequence of values.  
It is called an array and is written as list of values between square brackets, separated by commas.

## Methods

Properties that contain fuction values are generally called methods of the value they belong to.

## Objects

Value to the objects are arbitrary collection of properties.

```javascript
let object = {
  name: "ishu",
  "home location": "Norwich",
};

console.log(name in object);
```

The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.

## Mutability

Numbers, string and boolean are all immuttable, whereas you can change object's properties. For example

```javascript
let object = { value: 2 };
let object2 = object;
let object3 = { value: 2 };

object.value = 3;
console.log(object2.value); //3
```

Here changing the value property of object binding reflects in the value property of object2 binding because both the bindings refer to the same object

## The lycanthrope’s log

Using correlation, dependence between two statistical variable can be found. Correlation between variables is between -1 and 1.  
Zero correlation means no dependency. Negative values shows that two variables are related but opposite, if one is true the other is false.

We use phi coefficient to calculate correlation between boolean variables.

ϕ =
n11n00 − n10n01
√ n1•n0•n•1n•0

Here the 0 represents false and 1 represents true

This is how we convert the phi coeffecient into pure javascript

```javascript
function phi(table) {
  return (
    table[3] * table[0] -
    (table[2] * table[1]) /
      Math.sqrt(
        table[3] +
          table[2] +
          (table[0] + table[1]) +
          (table[3] + table[1]) +
          (table[0] + table[2])
      )
  );
}
```

To extract two by two table from the [journal](https://eloquentjavascript.net/code/journal.js), we can loop through the entries and tally how many times an event occurs in relation to the squirrel transformation.

```javascript
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
```

To find the phi coeffecient of the chance for converting into a squirrel, first we need to store unique events in an array.  
And can find phi-coefficient for each unique event.

```javascript
let events = [];
for (let entry of journals) {
  for (let event of entry.events) {
    if (!events.includes(event)) {
      events.push(event);
    }
  }
}

for (let event of events) {
  console.log(phi(tableFor(event, journal)));
}
```
