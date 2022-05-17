import re

#8位模式
print(re.search(b'\x30\x31{3}',b'\x30\x31\x31\x31\x31'))
print(re.search(b'\d',b'\x3a'))

print(re.findall(r'\bFishC\b', 'FishC.com!FishC_com!(FishC)'))
print(re.findall(r'\w', '我爱鱼C工作室(Love_FishC.com!)'))

p = re.compile(r'[A-Z]')
print(p.search('I love FishC.com!'))
print(p.findall('I love FishC.com!'))