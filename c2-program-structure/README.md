## Updating bindings succintly

When looping, a program needs to update the binding value corresponding to it's previous value.  
These shortcuts shortens the program.

```javascript
let result = 0;
for (let count = 0; count < 10; count++) {
  result += count;
}
```

## Dispatching on a value with switch

If the value given to the switch corresponds to the label, the code following the label would be executed. If none of the label matches the code following the default would be executed. Without the break statement, execution doesn't stop.

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
