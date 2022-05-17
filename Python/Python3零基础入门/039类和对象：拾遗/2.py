class C:
    def x(self):
        print('X-man!')

c = C()
c.x()
c.x = 1
print(c.x)
c.x()   #这里会报错,因为当属性名和方法名相同时,属性会覆盖方法