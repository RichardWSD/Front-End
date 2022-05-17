class Person:
    __name = '小甲鱼' #定义私有变量只需要在变量或者函数名前加上两个下划线,那么这个函数或变量就会为私有的了

p = Person()
p.__name
