# 1.   Under the num_list create a new for loop and print out each value on the list in sequential order.
# 2.  Inside the for loop, create a condition that will look for all numbers that are greater than 45 and print out only numbers that meet that condition
# 3.  Change the print statement to “Over 45” and add an else condition with a print statement of “Under 45”.
# 4.  Update the for loop to use the enumerate function so you can get and use the index. Alter the condition to look for number 36 and print out the following: ‘Number found at position: ‘, index number
# 5.  Next, create a new variable called count and assign it a value of 0 and place it outside the for loop.
# 6.  Inside the for loop increment the counter by 1.
# 7.  Add a print statement outside the for loop to print the value of the count variable.
# 8.  Finally, add a break statement directly after the print statement inside the if condition for finding the number. 

num_list = [33,42,5,66,77,22,16,79,36,62,78,43,88,39,53,67,89,11]
for num in num_list:
    print(num)

for num in num_list:
    if num > 45:
        print(num)

for num in num_list:
    if num > 45:
        print('Over 45')
    else:
        print('Under 45')


count = 0
for i, value in enumerate(num_list):
    if value == 36:
        print("number found at position: " + str(i))
        break
    count += 1
print(count)

# vs

count = 0
for i, value in enumerate(num_list):
    count += 1
    if value == 36:
        print("number found at position: " + str(i))
        break
print(count)

# can use enumerate to get list of indices 
num_list = [33,42,5,66,77,22,16,79,36,62,78,43,88,39,53,67,89,11]
over_45_list = []
under_or_equal_45_list = []
for num in num_list:
    if num > 45:
        over_45_list.append(num)
    else:
        under_or_equal_45_list.append(num)
print(f"The list of numbers greater than 45: {over_45_list}")
print(f"The list of numbers less than or equal to 45: {under_or_equal_45_list}")
