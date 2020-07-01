# Python - Merging dictionaries
dict1 = {'a' : 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}

# Python 3.5>
mergedDictv3 = {**dict1, **dict2}
# Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Python 2.x
mergedDictv2 = dict(dict1, **dict2)
# Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}

'''
# Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101244494892252/?type=3&theater
# Instagram: https://www.instagram.com/p/B-xFfsggLdJ/
# Twitter: https://twitter.com/arch_code/status/1251548664390201344/photo/1
'''