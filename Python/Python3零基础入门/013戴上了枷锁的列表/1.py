tuple1 = (1,2,3,4,5,6,7,8)
print(tuple1[1])
print(tuple1[:5])
print(tuple1[5:])
# tuple1[1]=3 #元组的元素不可以修改

temp = (1) #这样子是定义了整数1
print(type(temp))
temp = (1,) #要这样子定义才是一个元素的元组
temp = 1, #或者这样
temp = () #空的元组

print(8*(1,))

temp = ('11', '22', '33', '44')
temp = temp[:2] + ('插入的',) + temp[:2]
print(temp)
