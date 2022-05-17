def MyFun():
    # 如果确实需要修改全局变量那么用global关键字定义一下
    global count
    count = 10
    print(count)

count = 5
MyFun()
print(count)

#内嵌函数
def fun1():
    print('fun1()正在被调用')
    def fun2():
        print('fun2()正在被调用')
    fun2()

fun1()

#闭包
def FunX(x):
    def FunY(y):
        return x*y
    return FunY

print(FunX(8)(5))

#不能在内部函数对外部函数变量修改(用列表可以)
# def Fun1():
#     x = 5
#     def Fun2():
#         x *= x
#         return x
#     Fun2()

# Fun1()

#2.x兼容写法
# def Fun1():
#     x = [5]
#     def Fun2():
#         x[0] *= x[0]
#         return x[0]
#     return Fun2()

# print(Fun1())

#3.x写法
def Fun1():
    x = 5
    def Fun2():
        nonlocal x
        x *= x
        return x
    return Fun2()

print(Fun1())