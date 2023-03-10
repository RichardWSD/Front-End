class Rectangle:
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    def __setattr__(self, name, value):
        if name == 'square':
            self.width = value
            self.height = value
        else:
            self.__dict__[name] = value
            # self.name = value #这么写会触发递归无限循环问题,可以用super().__setattr__(name, value)来解决

    def getArea(self):
        return self.width * self.height
