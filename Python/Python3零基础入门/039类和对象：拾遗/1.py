class C:
    count = 0 #这个相当于静态变量

a=C()
b=C()
c=C()

print(a.count)
print(b.count)
print(c.count)

c.count+=10 #这个相当于c对象生成了一个新的count变量,因为python的变量不需要声明
print(a.count)
print(b.count)
print(c.count)

C.count+=100
print(a.count)
print(b.count)
print(c.count)