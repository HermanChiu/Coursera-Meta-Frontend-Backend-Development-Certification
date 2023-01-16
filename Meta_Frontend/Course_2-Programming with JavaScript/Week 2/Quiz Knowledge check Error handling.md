### 1. What will be printed when the following code runs?
```
  var result = null;
  console.log(result);
```

1 / 1 point

- [ ] undefined


- [x] null


- [ ] 0
```
Correct
That's correct! Since the value is initialised with null, null will be output.
```
### 2. When the following code runs, what will print out?
```
  try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
```
1 / 1 point

- [x] Hello


- [ ] Goodbye
```
Correct
That's correct! Since there is no error thrown inside the  try  block, the catch  block  will not run. Therefore, "Hello" will print out.
```
### 3. If you pass an unsupported data type to a function, what error will be thrown?

1 / 1 point

- [ ] RangeError


- [ ] SyntaxErrror


- [x] TypeError
```
Correct
That's correct! TypeError will be thrown when an incorrect data type is passed to a function.
```
### 4. What will print out when the following code runs?
```
  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }
```

1 / 1 point

- [ ] null


- [x] undefined


- [ ] ok
```
Correct
That's correct! Since the value is not initialised, it will have the undefined data type.
```
### 5. What will print out when the following code runs?
```
  throw new Error();
  console.log("Hello");
```
1 / 1 point

- [ ] Hello


- [x] Nothing will print out.
```
Correct
That's correct! Throwing an error will stop the execution of the code.
```