### 1. What will be the output of the following code:
```
a = [[96], [69]]

print(''.join(list(map(str, a))))
```
1 / 1 point

- [x] `“[96][69]”`


- [ ] `“[96],[69]”`


- [ ] `[96][69]`


- [ ] `“9669”`
```
Correct
Correct – It will initially be a list of strings such as ['[96]', '[69]'] which is then converted into a conjoined string. 
```
### 2. Which of the following is TRUE about the map() and filter() functions?

1 / 1 point

- [ ] The map() function is built-in, but the filter() function needs to be defined first. 


- [ ] Both the map() and filter() functions need to be defined before we use them. 


- [x] Both the map() and filter() functions are built-in. 


- [ ] The map() function needs to be defined first, but the filter() function is built-in.
```
Correct
Correct! Function you pass to filter() and map() function may need definition, but they both are built-in.
```
### 3. What will be the output of the following code:
```
z = ["alpha","bravo","charlie"]
new_z = [i[0]*2for i in z]
print(new_z)
```
1 / 1 point

- [ ] `[‘aa’], [‘bb’], [‘cc’]`


- [x] `['aa', 'bb', 'cc']`


- [ ] `[‘a’, ‘b’, ‘c’]`


- [ ] `['alphaalpha', 'bravobravo', 'charliecharlie']`
```
Correct
Correct. The output will be a list of strings. 
```