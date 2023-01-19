### 1. Which of the following is not a sequence data-type in Python?

1 / 1 point

- [ ] String


- [ ] Tuples


- [ ] List


- [x] Dictionary
```
Correct
Correct! Dictionaries have key-value object structure and are not sequences. 
```
### 2. For a given list called new_list, which of the following options will work:

new_list = [1,2,3,4]

Select all that apply.

1 / 1 point

- [ ] new_list[4] = 10


- [x] new_list.extend(new_list)
```
Correct
Correct. This will extend the list to give [1,2,3,4,1,2,3,4]
```

- [x] new_list.insert(0, 0)
```
Correct
Correct. This will insert 0 at the 0th index giving: [0,1,2,3,4]
```

- [x] new_list.append(5)
```
Correct
Correct. This will append the value 5 to the list giving: [1,2,3,4,5]
```
### 3. Which of the following is not a type of variable scope in Python? 

1 / 1 point

- [ ] Local


- [ ] Global


- [ ] Enclosing


- [x] Package
```
Correct
Correct. Packages do not define a scope, they are external installations that we bring to extend code functionality. 
```
### 4. Which of the following is a built-in data structure in Python?

1 / 1 point

- [ ] Tree


- [ ] Queue


- [x] Set


- [ ] LinkedList
```
Correct
Correct! Set is a built-in data structure such as list, tuple, etc. 
```
### 5. For a given file called ‘names.txt’, which of the following is NOT a valid syntax for opening a file:

1 / 1 point
- [ ] 
```
with open('names.txt', 'r') as file:

 print(type(file))
```
- [ ] 
```
with open('names.txt', 'w') as file:

 print(type(file))
```
- [ ] 
```
with open('names.txt', 'rb') as file:

 print(type(file))
```
- [x] 
```
with open('names.txt', 'rw') as file:

 print(type(file))
```

```
Correct
Correct. It should either be ‘r’ mode for reading or ‘w’ mode for writing. 
```
### 6. Which among the following is not a valid Exception in Python?

1 / 1 point

- [ ] ZeroDivisionException


- [ ] FileNotFoundError


- [ ] IndexError


- [x] LoopError
```
Correct
Correct. There is no such Exception defined in Python. 
```
### 7. For a file called name.txt containing the lines below:
```
First line
Second line
And another !
```
What will be the output of the following code:

```
with open('names.txt', 'r') as file:
 lines = file.readlines()
print(lines)
```
1 / 1 point

- [ ] 
```
'First line'
```

- [x] 
```
[‘First line\n’,

‘Second line\n’,

‘And another !’]
```

- [ ] 
```
['First line']
```

- [ ] 
```
'First line'

'Second line'

'And another !'
```

```
Correct
Correct! readlines() returns an ordered list with lines in the text file as items in the list. 
```
### 8. State TRUE or FALSE:

*args passed to the functions can accept the key-value pair. 

1 / 1 point

- [ ] True


- [x] False
```
Correct
Correct! You use **kwargs for passing dictionaries or videos containing key-value pairs. 
```