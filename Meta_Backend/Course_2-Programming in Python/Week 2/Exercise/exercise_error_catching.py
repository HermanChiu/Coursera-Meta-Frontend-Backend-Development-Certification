# IndexError
# The below code has one problem. It is trying to locate an item from the list that does not exist.
#  Running the code will throw the IndexError. 
# Add exception handling to stop the error from being thrown and return a more user-friendly message such as "Item does not exist in the list".

items = [1,2,3,4,5]
try:
    item = items[6]
    print(item)
except IndexError:
    print("Item does not exist in the list")


# ZeroDivisionError
# In math there are rules about dividing by zero.
# The below code is trying to do just that and will throw a ZeroDivisionError.
# Add exception handling to return back 0 instead of allowing the error to be thrown.

def divide_by(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")

ans = divide_by(40, 0)
print(ans)


# FileNotFoundError
# The code below is looking for a file that does not exist.
#  Add exception handling to catch this error and return the following "The file could not be found".

try:
    with open('file_does_not_exist.txt', 'r') as file:
        print(file.read())
except FileNotFoundError:
    print("The file could not be found")