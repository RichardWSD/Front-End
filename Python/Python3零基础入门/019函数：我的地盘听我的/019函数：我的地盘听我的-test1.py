def discounts(price, rate):
    final_price = price * rate
    old_price = 88 #这里试图修改全局变量,其实是python创建了一个局部变量(在函数里面可以读取全局变量的值,但是不要去修改它)
    print('修改后old_price的值是：', old_price)
    return final_price

old_price = float(input('请输入原价：'))
rate = float(input('请输入折扣率：'))
new_price = discounts(old_price, rate)
print('修改后old_price的值是：', old_price)
print('打折后价格是：', new_price)
