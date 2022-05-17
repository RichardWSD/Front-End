class BB:
    def printBB():
        print('no zuo no die')

BB.printBB()
bb = BB()
bb.printBB() #会报错,因为printBB方法没有self参数。Python严格要求方法需要有实例才能被调用，这种限制其实就是Python所谓的绑定概念