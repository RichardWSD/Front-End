import os
print(os.path.basename('E:\\A\\B\\C\\sexy.avi'))
print(os.path.dirname('E:\\A\\B\\C\\sexy.avi'))
print(os.path.join('C:\\','A','B','C'))
print(os.path.split('E:\\A\\SEXY.AVI'))
print(os.path.split('E:\\A\\C'))
print(os.path.splitext('E:\\A\\SEXY.AVI'))

import time
print(time.gmtime(os.path.getatime('./2.py')))
print(time.localtime(os.path.getatime('./2.py')))

print(os.path.ismount('E:\\'))
print(os.path.ismount('E:\\A'))