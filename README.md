# eloquent-notes

## Values, types and operators

### Numbers
Javascript uses a fixes number of bits, 64 of them

### Arithmetic
'+' and '-' has the same level of **precendence**. The same goes for '*' and '/'. When multiple operator with the same precendence level appear next to each other, the calculations happens from left to right.
Another operator in javascript arithmetic is %, the reminder operator. X % Y It provides the reminder of X divided by Y. It is sometimes called modulo.

### Special numbers
There are three special values in javascript whole value type is number but doesn't behave like normal numbers. -Infinity, Infinity, Nan - **Not a number**.  
Nan is resulted when an arithmetic operation yields unmeaningfull value. There is only one value in javascript which is not equal to itself- Nan

### String

A string is written by enclosing their content in quotes. single quotes, double quotes and backtick can be used to create a string.  

```javascript   
      "This is a string"
      'This is a string too'
      `What about this? Yeah this too!`
```

### Automatic type conversion

When am operator is applied to wrong type of value, javascript will convert the value to the type it needs by some set of rules. This is called **type coercion**.  
By using === strict equality operator we can avoid type conversion by javascript.

### Short circuit evaluation

When using && and || operator, javascript evlautes the value in the left hand side to a boolean type and then decides whether to move on the value in the right hand side.  
For the && operator if left hand side value evaluates to true, right hand side value would be returned, if it is false lhs value will be returned. Same goes for the || operator but the other way around.

### Bindings

To catch and hold values javacript provides a thing called binding or variable. Bindings or variables can be imagined as tentacles rather that boxes.  
Two bindings can refer to the same value
It does not contian the value, it point towards them. A binding defined using **let** keyword can change it's pointer from one value to another which cannot be done by the binding defined using **const**.

 ### Binding names
 
 Binding names can be any word. It can start with a digit. There are few words in javascript which are reserved keywords. Javascript throws a syntax error if the binding name is any of the reserved keywords.
 
 ### Environment
 
 The collection of the binding and their values that exists at a given time is called environment.
 
 ### Function
 
 A function is piece of program wrapped in a value. It has to be invoked to run the program. Anything that produces a value in javascript is a expression.
