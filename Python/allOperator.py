# Python - All operator

oneTrue = [True, False]
allTrue = [True, True]
allFalse = [False, False]

if all(oneTrue):
    print("All of them are True")
else:
    print("At least one of is not True") # This will be executed

if all(allTrue):
    print("All of them are True") # This will be executed
else:
    print("At least one of is not True")

if all(allFalse):
    print("All of them are True")
else:
    print("At least one of them is not True") # This will be executed


'''
# Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101805104836191/?type=3&theater
# Instagram: https://www.instagram.com/p/B-4u6ZWgnnQ/
# Twitter: https://twitter.com/arch_code/status/1251550251539972100/photo/1
'''