#coding=utf-8
dict1={}

#用fromkeys创建字典
print(dict1.fromkeys((1,2,3)))
print(dict1.fromkeys((1,2,3), 'Num'))
print(dict1.fromkeys((1,2,3), ('one','two','three')))
dict1 = dict1.fromkeys(range(32),'赞')
for eachKey in dict1.keys():
    print(eachKey)

for eachValue in dict1.values():
    print(eachValue)

for eachItem in dict1.items():
    print(eachItem)

print(dict1.get(32, '木有!'))
print(dict1.get(31, '木有!'))
print(32 in dict1)
print(31 in dict1)

dict1.clear()
print(dict1)

a = {1: 'one', 2: 'two', 3: 'three'}
print(id(a)) #查看a变量的地址
# print(id(b))
# print(id(c))

print(a.pop(2)) #弹出键为2的项
print(a.popitem()) #字典是没顺序的所以这个是随机弹的

a.setdefault('小白')
b={'小白':'狗狗'}
a.update(b)
print(a)