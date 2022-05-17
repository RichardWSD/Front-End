class Parent:
    def hello(self):
        print('正在调用父类的方法...')

class Child(Parent):
    pass

p = Parent()
p.hello()
c = Child()
c.hello()