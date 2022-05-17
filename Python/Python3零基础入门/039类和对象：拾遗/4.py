class CC:
    def setXY(self, x, y):
        self.x = x
        self.y = y

    def printXY(self):
        print(self.x, self.y)

dd = CC()
#__dict__仅打印实例的属性
print(dd.__dict__)
print(CC.__dict__)

dd.setXY(4,5)
print(dd.__dict__)
print(CC.__dict__)

del CC
dd.printXY() #这里还能调用printXY方法的原因是：类中的属性和方法都是静态的，虽然我们删除掉了CC类，但是它占用的内存还没被释放
             #静态变量的内存是在程序退出时才会被释放的
