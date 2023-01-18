### 1. What is the correct way to export the  timesTwo  function as a module so that Jest can use it in testing files?

1 / 1 point

- [ ] export module(timesTwo)


- [ ] module(exported(timesTwo))


- [ ] document.module.export = timesTwo


- [x] module.exports = timesTwo
```
Correct
That's correct! This is the correct way to export the function.
```
### 2. Testing is a way to verify the expectations you have regarding the behavior of your code.

1 / 1 point

- [x] true


- [ ] false
```
Correct
That's correct! Testing is good practice as a software engineer for verifying expectations.
```
### 3. Node.js can be used to build multiple types of applications. Select all that apply.

1 / 1 point

- [x] Command line applications
```
Correct
That's correct! Command line applications can be built with using Node.js.
```

- [x] Desktop applications
```
Correct
That's correct! Desktop applications can be built with using Node.js.
```

- [x] Web application backends
```
Correct
That's correct! Backends can be built with using Node.js.
```
### 4. When the following test executes, what will the test result be?
```
    function add(a, b) {
        return a + b;
    }

    expect(add(10, 5)).toBe(16);
```

1 / 1 point

- [ ] Success.


- [x] Fail.
```
Correct
That's correct! The expectation will fail as the function will return 15 which does not equal 16.
```
### 5. Which of the following is the slowest and most expensive form of testing?

1 / 1 point

- [ ] Unit testing


- [ ] Integration testing


- [x] End-to-end testing (e2e)
```
Correct
That's correct! End-to-end testing (e2e) is the most expensive as these tests take the most time to set up and run.
```
### 6. Mocking allows you to separate the code that you are testing from its related dependencies.

1 / 1 point

- [x] true


- [ ] false
```
Correct
That's correct! Mocking allows you to isolate the code being tested in your unit tests.
```