class A:
    def __str__(self):
        return '小甲鱼是帅哥'

class B:
    def __repr__(self):
        return '小甲鱼是帅哥'

a = A()
b = B()
print(a)
b