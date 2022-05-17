class int(int):
    def __add__(self, other):
        return int.__sub__(self, other)

a = int('5')
b = int(3)
print(a + b)