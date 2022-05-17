class Person:
    __name = '小甲鱼'
    def getName(self):
	    return self.__name

p = Person()
# p.__name
print(p.getName())
#实际上python是将__name在内部重命名成了_类名__变量名
print(p._Person__name)
