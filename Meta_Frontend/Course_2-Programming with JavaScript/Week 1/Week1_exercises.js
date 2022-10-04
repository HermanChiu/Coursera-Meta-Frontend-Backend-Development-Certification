// Declare a new variable named petDog and give it the name Rex.
// Declare a new variable named petCat and give it the name Pepper.
// Console.log the petDog variable.
// Console.log the petCat variable.
// Console.log the text "My pet dog's name is: " and the petDog variable.
// Console.log the text "My pet cat's name is: " and the petCat variable.
// Declare another variable and name it catSound. Assign the string of "purr" to it.
// Declare another variable and name it dogSound. Assign the string of "woof" to it.
// Console.log the variable petDog, then the string "says", then the variable dogSound.
// Console.log the variable petCat, then the string "says", then the variable catSound.
// Reassign the value stored in catSound to the string "meow".
// Console.log the variable petCat, then the string "now says", then the variable catSound.
// M​ake sure to output all your variables. Feel free to play.

var petDog = "Rex"
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog)
console.log("My pet cat's name is: ", petCat)
let catSound = "purr"
let dogSound = "woof"
console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)
catSound = "meow"
console.log(petCat, "now says", catSound)


// Part 2 


// Create a variable named  score and set it to  8
// Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator
// The expected output in the console should be: "Mid-level skills: true".

var score = 8;
console.log("Mid-level skills:", score > 0 || score < 10)


// Declare the variable timeRemaining, and assign the value of 0 to it.
// Declare the variable energy, and assign the value of 10 to it.
// Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
// Note that the expected output in the console should be: "Game over: true".

var timeRemaining = 0
var energy = 10
console.log("Game over: ", timeRemaining == 0 || energy == 0)

// The first variable, named num1,  should be assigned a number value of 2.
// The second variable, named num2, should be assigned a number value of 5.
// The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
// The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
// The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
// The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
// Run console log two times after you've set the variables:
// The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
// The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2

var num1 = 2
var num2 = 5 
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0 
var result2 = test2 == 0

console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)


// Console log the result of adding two numbers, 5 and 10, using the + operator.

console.log(5+10)


// The first variable should be a string with the following value: "Now in ". Name the variable now.
// The second variable should be a number with the value: 3. Name the variable three.
// The third variable should a string with the following value: "D!". Name the variable d.
// Console log the following code: now + three + d.
// Note: The expected output should be: "Now in 3D!".

var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d)


// Code a new variable and name it counter, assigning it to the value of 0.
// On the next line, use the += operator to increase the value of counter by 5.
// On the next line, use the += operator to increase the value of counter by 3.
// On the fourth line, console log the value of the counter variable.
// Note: The output value should be 8.

var counter = 0
counter += 5
counter += 3
console.log(counter)

// Complete the following steps to create: Are You Old Enough? 
// Declare a variable age using the var keyword and set it to the number 10.
// Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".
// Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
// Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".
// Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
// T​ry adjusting the age and executing the program to see ho​w it will affect the output.

// Code the days of the week program as a switch statement
// On the next line, define a new variable, name it day, and set its value to "Sunday".
// Start coding a switch statement, passing the day variable as the expression to evaluate.
// Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
// At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
// Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

var age = 64;
if(age >= 65) {
    console.log("You get your income from your pension");
}else if(age >= 18){
    console.log("Each month you get a salary");
}else if(age < 18){
    console.log("You get an allowance")
}else{
    console.log("The value of the age variable is not numerical")
}

var day = "funday";
switch(day){
    case "Monday":
        console.log('Dinner')
        break
    case "Tuesday":
        console.log('lunch')
        break
    case "Wednesday":
        console.log('breakfast')
        break
    case "Thursday":
        console.log('go run')
        break
    case "Friday":
        console.log('go swim')
        break
    case "Saturday":
        console.log('sleep in')
        break
    case "Sunday":
        console.log('church')
        break
    default:
        console.log('no such day')
        break
}


//Write a "for" loop that will perform exactly the same repetitive code as this:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

for(var i =1; i<= 5; i++){
    console.log(i)
}
console.log('Counting completed!')


// Write a "for" loop that will perform exactly the same repetitive code as this:

for(var i =5; i>= 1; i--){
    console.log(i)
}
console.log('Counting finished!')

// Write a "while" loop that will perform exactly the same repetitive code as this:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
var i = 1
while(i<=5){
    console.log(i)
    i++
}
console.log('Counting completed!')

// Write a "while" loop that will perform exactly the same repetitive code as this:

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
var i = 5
while(i >= 1){
    console.log(i)
    i--
}
console.log('Countdown finished!')

// Write a "while" loop that will perform exactly the same repetitive code as this:

console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
var year = 2018
while(year < 2023){
    console.log(year)
    year++
}


// Exercise 1
// In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.
// To make the counter increment by 1 on each loop, you will use i++.
// The exit condition for the for loop is i<=10.
// Inside the loop, write an if-else statement, which will check the following conditions:
// First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".
// Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".
// Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".
// For all the remaining values of i, your code will console log just the value of i.
// Note: The expected console log of the entire code should be as follows.
// Gold medal
// Silver medal
// Bronze medal
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for( var i = 1; i <=10; i++){
    if(i === 1){
        console.log("Gold Medal")
    }else if(i === 2){
        console.log("Silver Medal")
    }else if(i === 3){
        console.log("Bronze Medal")
    }else{
        console.log(i)
    }
}

// Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
// When you code the solution, the output in the console should remain exactly the same as in the previous question.

// Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.

for( var i = 1; i <=10; i++){
    switch(i){
        case 1:
            console.log("Gold Medal")
            break
        case 2:
            console.log("Silver Medal")
            break
        case 3:
            console.log("Bronze Medal")
            break
        default:
            console.log(i)
            break
    }
}