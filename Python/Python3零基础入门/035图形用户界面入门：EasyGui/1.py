#安装EasyGui: python3 setup.py install

import easygui
easygui.msgbox('嗨，小甲鱼')

#这种方式会影响原有的同名函数
from easygui import *
msgbox('嗨，小美女')

import easygui as g
g.msgbox('嗨，鱼C')

#建议不要在IDLE上运行EasyGui
#EasyGui是运行在Tkinter上并拥有自身的事件循环，而IDLE也是Tkinter写的一个应用程序并也拥有自身的时间循环。
#因此当两者同时运行的时候，有可能会发生冲突且带来不可预测的结果。因此如果你发现你的EasyGui程序有这样的问题，请尝试在IDLE外去运行你的程序