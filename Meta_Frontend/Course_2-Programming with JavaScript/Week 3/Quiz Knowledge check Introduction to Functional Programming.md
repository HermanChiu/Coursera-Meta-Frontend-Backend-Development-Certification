### 1. What will print out when the following code runs?
```
    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);
```

1 / 1 point

- [ ] 77


- [ ] 88


- [ ] null


- [x] undefined
```
Correct
That's correct!  localVar  is scoped to the function so therefore it is undefined in the global scope.
```
### 2. Variables declared using  const  can be reassigned.

1 / 1 point

- [ ] true


- [x] false
```
Correct
That's correct! Variables declared using  const  cannot be redeclared or reassigned.
```
### 3. When a function calls itself, this is known as _____________.

1 / 1 point

- [x] Recursion


- [ ] Looping


- [ ] Higher-order Function
```
Correct
That's correct! Recursion is when a function calls itself.
```
### 4. 
What will print out when the following code runs?
```
    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);
```

1 / 1 point

- [ ] 10


- [ ] 20


- [x] 30


- [ ] 40
```
Correct
That's correct! The food value starts at 10. The meal function is called twice which adds 10 to the food value each time. Therefore, 30 is printed.
```
### 5. What value will print out when the following code runs?
```
    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
```

1 / 1 point

- [ ] 1


- [ ] 2


- [ ] 3


- [x] 4
```
Correct
That's correct! The  two  function is passed as the first parameter to the  calculate  function and the  one  function is passed as the second parameter. Therefore, when the  calculate  function runs, it will call  two() + one() + one() . The result is then  4 .
```