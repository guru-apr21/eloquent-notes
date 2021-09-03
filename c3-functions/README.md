## Defining a function

A function is created with an expression that starts with the keyword **function** followed by the body of the function which contains the statements to be executed when invoked. A function can have as many parameters or no parameters at all. Unlike other bindings the value of the parameters are not defined by the code itself but defined by the caller of the function. With no return statement the function returns the value undefined.

## Bindings and scope

A binding declared inside a function block is invisible outside that function block. These are called local bindings.  
All other bindings that are declared outside the function block are available throught out the enviroment. These are global bindings.  
Before ES6 there was only **var** keyword to declare binding. It is available throughout the global scope if not declared within in the function.

## Nested scope

A local scope has the visibility to all the local scope within it and the global scope around it. This is called lexical scoping.

## Function as values

A function binding just acts a name to a piece of program. If declared using let, the value can be changed anywhere in the program.

```javascript
const square = function (x) {
  return x * x;
};
```

## Declaration notation

When declaring a function using the function keyword, the funciton can be invoked even before the declaration. Here the function is moved to the top of the program under the hood by javascript.

```javascript
function square(x) {
  return x * x;
}
```

## Arrow functions

Another notation to create function is using **=>** sign after the parameters list. This roughly means that this input list produces this result. If the body of the function is the single line of statement, the braces can be ommitted. If there are no parameters empty paranthesis would do fine.

```javascript
const square = (x) => x * x;
```

## Call stack

When a function is called, after the execution it has to return to the context form where it is called. To return to the specific context the computer must remember the context. The place where the computer stores this context is called **call stack**.  
When a function call happens, the context from where it is called is stored in the top of this call stack. Once the function returns a value or ends it's execution, the computer removes the context from top and uses it for execution to continue.

To store this stack computer requires memory. If the stack size exceed a certain limit computer fails with **stack out of space** error.

```javascript
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
```

## Optional arguments

```javascript
function square(x) {
  return x * x;
}
```

The function square takes one argument, but javascript doesn't throw any error even if we pass multiple arguments.

```javascript
square(7, "shjd", 98);

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
```

Above call to the square function takes only the first argument and omits the other two. By using the = operator we can define a default value to the parameter, this default value is used if the argument is undefined or missed.
