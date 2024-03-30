import json
# create an array of fruits 
fruits = ["apple", "banana", "cherry"]
# print the items in alphabetical order
fruits.sort()
print(fruits)
# print the items in reverse alphabetical order
fruits.sort(reverse=True)
print(fruits)
# convert the array into json

json_fruits = json.dumps(fruits)
print(json_fruits)