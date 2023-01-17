### 1. What will print out when the following code runs?
```
    class Cake {
        constructor(lyr) {
            this.layers = lyr + 1;
        }
    }

    var result = new Cake(1);
    console.log(result.layers);
```

1 / 1 point

- [ ] 1


- [x] 2


- [ ] 3


- [ ] 4
```
Correct
That's correct! The Cake object stores its  layers  property as the value of the constructor parameter  lyr  plus one. Therefore, the value of the  layers  property is 2.
```
### 2. When a class  extends  another class, this is called ____________.

1 / 1 point

- [x] Inheritance


- [ ] Extension
```
Correct
That's correct! A class inherits from another class using the  extends  keyword. This is called Inheritance.
```
### 3. What will print out when the following code runs?
```
    class Animal {
        constructor(lg) {
            this.legs = lg;
        }
    }

    class Dog extends Animal {
        constructor() {
            super(4);
```

1 / 1 point

- [ ] 0


- [ ] undefined


- [ ] null


- [x] 4
```
Correct
That's correct! The Dog constructor passes the value of  4  to the super constructor of Animal. Therefore, the value of the  legs  property is  4 .
```
### 4. What will print out when the following code runs?
```
    class Animal {

    }

    class Cat extends Animal {
      constructor() {
        super();
        this.noise = "meow";
      }
```

1 / 1 point

- [x] undefined


- [ ] null


- [ ] ""


- [ ] meow
```
Correct
That's correct! The  noise  property does not exist within the scope of the  Animal  class. Therefore,  undefined  will print.
```
### 5. What will print out when the following code runs?
```
    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
        sayHello() {
            console.log("Hey");
```

1 / 1 point

- [ ] Hello


- [x] Hey
```
Correct
That's correct! The Friend class overrides the  sayHello  method. Therefore,  Hey  is printed out instead of  Hello  when  sayHello  is called.
```