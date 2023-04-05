## Exercise 0:
# Given the following scores:
scores = [5, 6, 6, 13, 6, 16, 2, 4, 6, 15, 3, 7, 20, 3, 24, 24, 1, 23, 3, 3, 3, 21, 7, 2, 12]

# What is the length of the list?
## code here 👇
scores = [5, 6, 6, 13, 6, 16, 2, 4, 6, 15, 3, 7, 20, 3, 24, 24, 1, 23, 3, 3, 3, 21, 7, 2, 12]
result = len(scores)
print(result)

## Exercise 1:
# Given the same list of scores, write a program that count how many 3s there is.
## code here 👇
scores = [5, 6, 6, 13, 6, 16, 2, 4, 6, 15, 3, 7, 20, 3, 24, 24, 1, 23, 3, 3, 3, 21, 7, 2, 12]
x = scores.count(3)
print(x)

## Exercise 2:
# Given the same list of scores, find the maximum in the list
## code here 👇

y = max(5, 6, 6, 13, 6, 16, 2, 4, 6, 15, 3, 7, 20, 3, 24, 24, 1, 23, 3, 3, 3, 21, 7, 2, 12)

print(y)

## Exercise 3:
## Given this two lists, write a program which prints the common elements
list_1 = ["foo", 2, "bar", 3, "baz", "spam", 4]
list_2 = ["1", 2, "3", 3, "4", "foo", "pasm", "bar"]
## code here 👇


common_elements = set(list_1) & set(list_2) 



print(common_elements)


print(list(common_elements))





