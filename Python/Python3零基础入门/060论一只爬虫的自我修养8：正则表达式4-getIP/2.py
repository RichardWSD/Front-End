import re

string="abcdefg  acbdgef  abcdgfe  cadbgfe"

#带括号与不带括号的区别
#不带括号
regex=re.compile("((\w+)\s+\w+)")
print(regex.findall(string))
#输出：[('abcdefg  acbdgef', 'abcdefg'), ('abcdgfe  cadbgfe', 'abcdgfe')]

regex1=re.compile("(\w+)\s+\w+")
print(regex1.findall(string))
#输出：['abcdefg', 'abcdgfe']

regex2=re.compile("\w+\s+\w+")
print(regex2.findall(string))
#输出：['abcdefg  acbdgef', 'abcdgfe  cadbgfe']

#findall()返回的是括号所匹配到的结果，多个括号就会返回多个括号分别匹配到的结果，
#如果没有括号就返回就返回整条语句所匹配到的结果。
#这个特性是正则表达式特有的，而不仅仅只是python语言。