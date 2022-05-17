class Parent:
    def hello(self):
        print('正在调用父类的方法...')

#如果子类中定义与父类同名的方法或属性,则会自动覆盖父类对应的方法或属性
class Child(Parent):
    def hello(self):
        print('正在调用子类的方法...')

p = Parent()
p.hello()
c = Child()
c.hello()