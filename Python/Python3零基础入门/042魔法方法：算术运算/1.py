class New_int(int):
    def __add__(self, other):
        return int.__sub__(self, other)
    def __sub__(self, other):
        return int.__add__(self, other)

a = New_int(3)
b = New_int(5)
print(a + b)
print(a - b)


#错误写法
class Try_int(int):
    def __add__(self, other):
        return self + other #这样会导致递归无限循环,可以用 return int(self) + int(other)来解决
    def __sub__(self, other):
        return self - other #这样会导致递归无限循环,可以用 return int(self) - int(other)来解决