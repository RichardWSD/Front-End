#coding=utf-8
try:
    sum = 1 + '1'
    f = open('aa.txt')
    print(f.read())
    f.close()
except (OSError,TypeError):
    print('出错啦T_T')
