try:
    with open('data.txt','w') as f: #with会在后面不用f的时候自动关闭
        for each_line in f:
            print(each_line)
except OSError as reason:
    print('出错啦：'+str(reason))