class C:
    #定义当该类的属性被访问时的行为(不管属性是否存在)
    def __getattribute__(self, name):
        print('getattribute')
        # 使用 super() 调用 object 基类的 __getattribute__ 方法
        return super().__getattribute__(name)

    def __setattr__(self, name, value):
        print('setattr')
        super().__setattr__(name, value)

    def __delattr__(self, name):
        print('delattr')
        super().__delattr__(name)
    #定义当用户试图获取一个不存在的属性时的行为
    def __getattr__(self, name):
        print('getattr')

c = C()
c.x
c.x = 1
c.x
del c.x
