x, y = 4, 5

if x < y:
	small = x
else:
	small = y
# 等价于
small = x if x < y else y
print(small)

assert 3 > 4 #当这个关键字后边的条件为假的时候，程序自动崩溃并抛出AssertionError的异常