#在__init__方法被调用前__new__方法会先被调用
class CapStr(str):
    def __new__(cls, string):
        print(cls)
        string = string.upper()
        return str.__new__(cls, string)

a = CapStr('i love fishC')
print(a)
print('================')

class C:
    def __init__(self):
        print('我是__init__方法,我被调用了...')
    #析构函数
    def __del__(self):
        print('我是__del__方法,我被调用了...')

c1 = C()
c2 = c1
c3 = c2
del c3
del c2
del c1