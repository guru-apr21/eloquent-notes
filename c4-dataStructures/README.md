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
