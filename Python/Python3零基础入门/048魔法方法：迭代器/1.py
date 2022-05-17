links = {
    '鱼C工作室': 'http://www.fishc.com',
    '鱼C论坛': 'http://bbs.fishc.com',
    '鱼C博客': 'http://blog.fishc.com',
    '支持小甲鱼': 'http://fishc.taobao.com',
}

for each in links:
    print('%s -> %s' % (each, links[each]))

string = 'FishC'
it = iter(string)
print(next(it))
print(next(it))
print(next(it))
print(next(it))
print(next(it))
# print(next(it))

#for原理
string = 'FishC'
it = iter(string)
while True:
    try:
        each = next(it)
    except StopIteration:
        break
    print(each)