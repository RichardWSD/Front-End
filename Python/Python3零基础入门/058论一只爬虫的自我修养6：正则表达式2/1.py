import re
# print(re.search(r'Fish(C|D)', 'FishC'))
# print(re.search(r'^FishC', 'FishC.com'))
# print(re.search(r'FishC$', 'loveFishC'))
# print(re.search(r'(FishC)\1', 'FishCFishC'))
# print(re.search(r'(FishC)\060', 'FishC0'))
# print(re.search(r'(FishC)\141', 'FishCa'))

# print(re.search(r'.','FishCFishC'))
# print(re.search(r'\.','FishCFishC'))
# print(re.search(r'[.]','FishCFishC'))

# print(re.findall(r'[a-z]','FishC.com'))
# print(re.findall(r'[\n]','FishC.com\n'))
print(re.findall(r'[^a-z]','FishC.com\n'))
print(re.findall(r'[a-z^]','FishC.com\n^'))

print(re.search(r'FishC{3}','FishCCC'))

s = '<html><title>I love FishC</title></html>'
print(re.search(r'<.+>', s))
print(re.search(r'<.+?>', s))