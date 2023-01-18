### 1. What will be the output of the following JavaScript?
```
const a = 10;
const b = 5;
if(a == 7 || b == 5) {
    console.log("Green");
} else {
    console.log("Blue");
}
```

1 / 1 point

- [x] Green


- [ ] Blue
```
Correct
That's correct. The logical OR operator results in the condition being true. Therefore, the code inside the if statement will execute and Green will be output.
```
### 2. What will be the output of the following JavaScript?
```
var x = 2;
x += 5;
console.log(x);
```

1 / 1 point

- [ ] 2


- [ ] 3


- [ ] 5


- [x] 7
```
Correct
That's correct! The x variable is initially assigned the value 2. Then 5 is added to the variable and the result is stored in the variable. Therefore, 7 is output by the code.
```
### 3. What is the data type of the x variable in the following code?
```
var x = 0 != 1;
```

1 / 1 point

- [ ] Number


- [ ] BigInt


- [ ] String


- [x] Boolean
```
Correct
That's correct! 0 != 1 will result in a true value which is a boolean.
```
### 4. What will the following JavaScript code output?
```
var x = 20;

if(x < 5) {
    console.log("Apple");
} else if(x > 10 && x < 20) {
    console.log("Pear");
} else {
    console.log("Orange");
}

```
1 / 1 point

- [ ] Apple


- [ ] Pear


- [x] Orange
```
Correct
That's correct! All conditions will fail because x is equal to 20. Therefore, the code inside the else statement will run and output Orange.
```
### 5. What will the following JavaScript code output?
```
var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);
```

1 / 1 point

- [ ] 0


- [ ] 2


- [ ] 5


- [x] 10
```
Correct
That's correct! The loop will run 5 times and each time add 2 to the result variable. Therefore, 10 will be output.
```
### 6. What will the following JavaScript code output?
```
console.log(result);
var result = 7;
```

1 / 1 point

- [ ] null


- [x] undefined


- [ ] 7
```
Correct
That's correct. Since result is not yet defined when it is output, the value undefined is output.
```
### 7. What will be the output of this JavaScript code snippet?
```
function addTwo(a,b) {
    return a + b
}
addTwo(5,"10")
```

1 / 1 point

- [x] 510


- [ ] 5


- [ ] 10
```
Correct
Well done. When using the + operator on a number and a string, the number gets coerced to a string and the result is two strings joined together.
```
### 8. What is the output of the code below?
```
var cat = {}
cat["sound"] = "meow"
var catSound = "purr"
console.log(cat.sound)
```

1 / 1 point

- [x] meow


- [ ] purr


- [ ] {}


- [ ] catSound
```
Correct
Well done. Console logging the sound property on the cat object will output the string "meow".
```
### 9. What is the output of the code below?
```
var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])
```

1 / 1 point

- [x] undefined


- [ ] 2


- [ ] 1


- [ ] 3
```
Correct
Well done. Trying to output the third item in the veggies array, using the syntax veggies [2]  will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
```
### 10. True or False. The second argument passed to the addEventListener function is the actual function that will handle the event, when it gets triggered.

1 / 1 point

- [x] True


- [ ] False
```
Correct
Well done. The second argument passed to the addEventListener handles the event.
```
### 11. How do you create a new h2 element using JavaScript?

1 / 1 point

- [x] With  document.createElement('h2')


- [ ] With  document.buildElement('h2')


- [ ] With  document.addElement('h2')
```
Correct
Well done. You create new elements on the document object using the createElement function.
```
### 12. Is the code below missing a  .js  after the  ./addFive ?
```
const addFive = require('./addFive')
```

1 / 1 point

- [x] false


- [ ] true
```
Correct
Well done. There's no need to add  .js  when importing files using the  require  syntax.
```