g = lambda x: x * 2 + 1
print(g(5))

# filter第一个参数是None则把列表为true的元素返回来
print(list(filter(None, [1,0,False,True])))
print(list(filter(lambda x: x % 2, range(10))))

print(list(map(lambda x: x * 2, range(10))))