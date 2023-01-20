### 1. Question 1
```
def sum(n):
   if n == 1:
       return 0
   return n + sum(n-1)

a = sum(5)
print(a)
```
What will be the output of the recursive code above?

1 / 1 point

- [ ] 15


- [ ] RecursionError: maximum recursion depth exceeded


- [ ] 0


- [x] 14
```
Correct
Correct! The output will be the sum of values from 2 to 5. 
```
### 2. Statement A: A function in Python only executes when called.

Statement B: Functions in Python always returns a value.

1 / 1 point

- [ ] Both A and B are True


- [ ] B is True but A is False


- [x] A is True but B is False


- [ ] Both A and B are False
```
Correct
Correct! Functions need to be called and don't always have to return a value. 
```
### 3.
```
some = ["aaa", "bbb"]

#1
def aa(some):
   return

#2
def aa(some, 5):
   return

#3
def aa():
   return

#4
def aa():
   return "aaa"
```

Which of the above are valid functions in Python? (Select all that apply)

1 / 1 point

- [x] 1
```
Correct
Correct. The function can return even if the argument passed is unused
```

- [ ] 2


- [x] 3
```
Correct
Correct. An empty function can exist even if it has no functionality. 
```

- [x] 4
```
Correct
Correct. You can return a string such as “aaa” from a function. 
```
### 4. For the following code:
```
numbers = [15, 30, 47, 82, 95]
def lesser(numbers):
   return numbers < 50

small = list(filter(lesser, numbers))
print(small)
```
If you modify the code above and change filter() function to map() function, what will be the list elements in the output that were not there earlier?

1 / 1 point

- [x] None of the other options


- [ ] 82, 95


- [ ] 15, 30, 47


- [ ] 15, 30, 47, 82, 95
```
Correct
Correct! The values returned by the map() function in this case are boolean values from the comparison done in the lesser() function. So the right answer is: True, False. 
```