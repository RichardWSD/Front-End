class Base1:
    def foo1(self):
        print('我是foo1,我为Base1代言...')

class Base2:
    def foo2(self):
        print('我是foo2,我为Base2代言...')

class C(Base1, Base2):
    pass

c = C()
c.foo1()
c.foo2()