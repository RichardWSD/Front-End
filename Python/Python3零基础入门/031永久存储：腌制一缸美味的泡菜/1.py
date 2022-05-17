#把数组以二进制方式写到文件
import pickle
my_list = [123,3.14,'小甲鱼',['another list']]
pickle_file = open('my_list.pkl', 'wb')
pickle.dump(my_list, pickle_file)
pickle_file.close()

#读取二进制文件
pickle_file = open('my_list.pkl', 'rb')
my_list2 = pickle.load(pickle_file)
print(my_list2)