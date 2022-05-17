#coding=utf-8
try:
    sum = 1 + '1'
    f = open('aa.txt')
    print(f.read())
    f.close()
except OSError as err:
    print('文件出错啦T_T\n错误原因是：'+str(err))
except TypeError as err:
    print('类型出错啦T_T\n错误原因是：'+str(err))
