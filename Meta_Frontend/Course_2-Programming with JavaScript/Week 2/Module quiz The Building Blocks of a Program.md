### 1. What data type is the variable  x ?
```
  var x = {};
```

1 / 1 point

- [ ] Function


- [ ] Array


- [x] Object
```
Correct
That's correct!  {}  is the array literal.
```
### 2. What will be the output of running the following code?  
```
try {
console.log('hello)
} catch(e) {
console.log('caught')
}
```
1 / 1 point

- [x] Uncaught SyntaxError: Invalid or unexpected token.


- [ ] Caught
```
Correct
Correct, you cannot handle SyntaxErrors in JavaScript using a try catch block.  
```
### 3. What value is printed when the following code runs?
```
  var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);
```

1 / 1 point

- [ ] bun


- [ ] beef


- [x] lettuce


- [ ] tomato sauce


- [ ] onion
```
Correct
That's correct! Indices start at 0. Therefore  lettuce  will print out as it is at index 2.
```
### 4. In the following code, how many methods does the  bicycle  object have?
```
  var bicycle = {
      wheels: 2,
      start: function() {

      },
      stop: function() {

      }
  };
```

1 / 1 point

- [ ] 1


- [x] 2


- [ ] 3
```
Correct
That's correct!  wheels  is a property and  start  and  stop  are methods.
```
### 5. When the following code runs, what will print out?
```
  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
```

1 / 1 point

- [ ] Hello


- [x] Goodbye
```
Correct
That's correct! When the error is thrown, the code will execute the code inside the catch statement.
```
### 6. If you mis-type some code in your JavaScript, what kind of error will that result in?

1 / 1 point

- [ ] RangeError


- [x] SyntaxErrror


- [ ] TypeError
```
Correct
That's correct!
```
### 7. Will the following code execute without an error?
```
  function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");
```

1 / 1 point

- [x] Yes


- [ ] No
```
Correct
That's correct! Although the code has a bug, it will execute without error. Instead of adding the numbers and printing  7 , it will print  34 .
```
### 8. What will be printed when the following code runs?
```
  var result;
  console.log(result);
```

1 / 1 point

- [x] undefined


- [ ] null


- [ ] 0
```
Correct
That's correct! Since no value was assigned to  result ,  undefined  will print out.
```
### 9. What will be the output of the following code?
```
var str = "Hello";
str.match("jello");
```
  

1 / 1 point

- [x] null


- [ ] undefined


- [] empty string
```
Correct
That's correct! Since the string "Hello" doesn't contain the string "jello", it cannot be matched, and thus an array object with the matching result cannot be created. Hence, the return value is null, signaling the absence of a matching result.  
```
### 10. What will be the output of the following code?
```
try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
```
  

1 / 1 point

- [ ] RangeError


- [ ] 5


- [ ] e


- [x] "There was an error"
```
Correct
Correct!  The catch block will execute and print because of the Range error.
```