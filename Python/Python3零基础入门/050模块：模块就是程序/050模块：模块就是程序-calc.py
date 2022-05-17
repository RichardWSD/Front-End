#第三种导入方式
import TemperatureConversion as tc
print("32摄氏度 = %.2f华氏度" % tc.c2f(32))
print("99华氏度 = %.2f摄氏度" % tc.f2c(99))

#第一种导入方式
# import TemperatureConversion
# print("32摄氏度 = %.2f华氏度" % TemperatureConversion.c2f(32))
# print("99华氏度 = %.2f摄氏度" % TemperatureConversion.f2c(99))

#第二种导入方式,但这种方式会使命名空间的优势消失,容易造成同名函数冲突的情况
# from TemperatureConversion import c2f,f2c
# print("32摄氏度 = %.2f华氏度" % c2f(32))
# print("99华氏度 = %.2f摄氏度" % f2c(99))
