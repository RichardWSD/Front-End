class A:
    pass
class B(A):
    pass
class C:
    pass

print(issubclass(B,A))
print(issubclass(B,B))
print(issubclass(B,object))
print(issubclass(B,C))
print('===================')

b1 = B()
print(isinstance(b1, B))
print(isinstance(b1, A))
print(isinstance(b1, C))
print(isinstance(b1, (A,B,C)))
print('===================')

class C:
    def __init__(self, x=0):
        self.x = x

c1 = C()
print(hasattr(c1, 'x'))
print(getattr(c1, 'y', '你所访问的属性不存在..'))
print('===================')

setattr(c1, 'y', 'FishC')
print(getattr(c1, 'y', '你所访问的属性不存在..'))
delattr(c1, 'y')
print('===================')

class C:
    def __init__(self, size=10):
        self.size = size
    def getSize(self):
        return self.size
    def setSize(self, value):
        self.size = value
    def delSize(self):
        del self.size
    x = property(getSize, setSize, delSize)

c1 = C()
print(c1.x)
c1.x = 18
print(c1.x)
del c1.x
# print(c1.x)