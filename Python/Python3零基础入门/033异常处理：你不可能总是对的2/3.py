#coding=utf-8
try:

    f = open('aa.txt', 'w')
    print(f.write('我存在了'))
    sum = 1 + '1'
except (OSError,TypeError):
    print('出错啦T_T')
finally:
    f.close()
