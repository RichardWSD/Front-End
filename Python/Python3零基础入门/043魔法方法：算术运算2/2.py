class Nint(int):
    def __radd__(self, other):
        return int.__sub__(self, other)

a = Nint(5)
b = Nint(3)

print(a + b)
print(1 + b)    # 1没有重写__add__方法而b有重写__radd__方法,如果__add__和__radd__都没有,则正常按加法来运算
