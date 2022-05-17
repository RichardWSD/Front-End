import re
print(re.search(r'FishC', 'I love FishC.com!'))
print(re.search(r'.', 'I love FishC.com!'))
print(re.search(r'Fish.', 'I love FishC.com!'))
print(re.search(r'\.', 'I love FishC.com!'))
print(re.search(r'\d', 'I love 123 FishC.com!'))
print(re.search(r'\d\d\d', 'I love 123 FishC.com!'))

print(re.search(r'[aeiou]', 'I love FishC.com!'))
print(re.search(r'[aeiouAEIOU]', 'I love FishC.com!'))
print(re.search(r'[a-z]', 'I love FishC.com!'))
print(re.search(r'[0-9]', 'I love 123 FishC.com!'))
print(re.search(r'ab{3}c', 'abbbc'))
print(re.search(r'ab{3,10}c', 'abbbbbbc'))
print(re.search(r'[0-255]', '188')) #这里只会匹配到1,因为正则只有0-9这样的范围,0-255的意思是匹配0-2,或者5或者5的数字

#匹配ip地址
print(re.search(r'((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}','1.1.1.1'))
print(re.search(r'((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}','192.254.10.1'))