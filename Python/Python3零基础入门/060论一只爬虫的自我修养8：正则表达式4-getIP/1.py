import re

result = re.search(r' (\w+) (\w+)', 'I love FishC.com')
print(result)
print(result.group()) #group() 同group（0）就是匹配正则表达式整体结果
print(result.group(1))
print(result.group(2))
print(result.start())
print(result.end())
print(result.span())