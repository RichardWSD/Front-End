# https://fishc.com.cn/forum.php?mod=viewthread&tid=45512&extra=page%3D1%26filter%3Dtypeid%26typeid%3D403
import random
secret = random.randint(1,10)
print(secret)

import os
print(os.getcwd())
# os.chdir('E:\\')
print(os.listdir(os.getcwd()))

os.mkdir('E:\\A')
os.mkdir('E:\\A\\B')
os.rmdir('E:\\A\\B')
os.rmdir('E:\\A')
os.makedirs('E\\AA\\C')
os.removedirs('E\\AA\\C')

os.system('cmd')
print(os.curdir)