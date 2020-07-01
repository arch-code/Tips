# Python - Argument Unpacking

def myfunc(x, y):
    print(x, y)

myTuple = (1, 2)
myList = [4, 5]
myDict = {'x': 6, 'y': 7}

myfunc(*myTuple) # Output: 1, 2
myfunc(*myList) # Output: 4, 5
myfunc(**myDict) # Output: 6, 7


'''
# Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101246404892061/?type=3&theater
# Instagram: https://www.instagram.com/p/B-1yPwEAXvk/
# Twitter: https://twitter.com/arch_code/status/1251550135173201925/photo/1
'''