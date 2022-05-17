class Fibs:
	def __init__(self):
		self.a = 0
		self.b = 1
	def __iter__(self):
		return self
	def __next__(self):
		self.a, self.b = self.b, self.a + self.b #赋值方式: x, y = 4, 5
		return self.a

fibs = Fibs()
for each in fibs:
	if each < 20:
		print(each)
	else:
		break
