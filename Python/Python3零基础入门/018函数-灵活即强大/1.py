def MyFirstFunction(name):
	'函数定义过程中的name是叫形参'
	#''里面的内容叫做函数文档,可以通过MyFirstFunction.__doc__或者help(MyFirstFunction)查看
	print('传递进来的' + name + '叫做实参，因为Ta是具体的参数值！')

def SaySome(name, words):
    print(name + '->' + words)

#关键字参数
SaySome(words='让编程改变世界', name='小甲鱼')

#默认参数
def SaySome2(name='小甲鱼', words='让编程改变世界'):
    print(name + '->' + words)

#收集参数
def test(*params):
    print('参数的长度是:', len(params))
    print('第二个参数是:', params[1])

test(1,2,3,4,5)

