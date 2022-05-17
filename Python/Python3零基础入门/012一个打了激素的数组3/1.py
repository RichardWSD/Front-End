list1=[123,456]
list2=[234,123]
print(list1 > list2)

list3=[123,456]
print((list1 < list2) and (list1 == list3))

list4 =list1 + list2
print(list4)

print(list3 * 3)

print(123 in list3)
print(123 not in list3)

list5=[1,1,1,2,23,5,6]
print(list5.count(1)) #1在list5中出现的次数

print(list5.index(1))
print(list5.index(1,1,5))

list5.reverse()
print(list5)

list5.sort()
print(list5)

list5.sort(reverse=True)
print(list5)

