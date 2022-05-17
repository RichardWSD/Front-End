def myGen():
    print('生成器被执行!')
    yield 1
    yield 2

myG = myGen()
print(next(myG))
print(next(myG))
# print(next(myG))
print('='*20)

for i in myGen():
    print(i)
print('='*20)

def libs():
    a = 0
    b = 1
    while True:
        a,b = b,a+b
        yield a

for each in libs():
    if each > 100:
        break
    print(each, end=' ')
print('\n','='*20)

a = [i for i in range(100) if not(i % 2) and i % 3]
print(a)

b = {i: i%2 == 0 for i in range(10)}
print(b)
print('='*20)

c = {i for i in [1,1,2,3,4,5,5,6,7,8,3,2,1]}
print(c)
print('='*20)

e = (i for i in range(10))
print(e)
print(next(e))
print(next(e))
print(next(e))
for each in e:
    print(each)
print('='*20)

print(sum((i for i in range(100) if i%2)))
print(sum(i for i in range(100) if i%2))