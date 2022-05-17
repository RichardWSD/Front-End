# https://fishc.com.cn/forum.php?mod=viewthread&tid=45279&extra=page%3D1%26filter%3Dtypeid%26typeid%3D403
f = open('./028文件：因为懂你，所以永恒-record.txt',encoding='UTF8')

print(f.read(5))

print(f.tell())
f.seek(0,0)
print(f.readline())

#低效率写法
f.seek(0,0)
lines = list(f)
for each_line in lines:
    print(each_line)

#高效率写法
f.seek(0,0)
for each_line in f:
    print(each_line)