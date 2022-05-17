num2 = {1,2,3,4,5,5,4,3,2,0}
print(type(num2))
print(num2)

num2.add(6)
num2.remove(5)
print(num2)

num3 = frozenset([1,2,3,4,5])
#num3.add(6) #这个会报错