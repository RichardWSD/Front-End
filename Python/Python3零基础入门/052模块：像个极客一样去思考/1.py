import timeit

print(timeit.__doc__)   #模块的简介
print(dir(timeit))
print(timeit.__all__) #一般__all__里面的东西就是模块希望外界调用的东西,规范的做法就是把我们要暴露给外界的东西放到__all__里面
                      #导入时就是导入__all__里面的东西
                      #如果没有__all__,那么就是把模块所有不以为__开头的东西导进来

#python自带有一些标准库
#python第三方库地址:https://pypi.org/
#PEP(Python Enhancement Proposals),Python增强建议书.用来规范与定义Python的各种加强与延伸功能的技术规格,好让Python开发社区能有共同遵循的依据