# https://fishc.com.cn/forum.php?mod=viewthread&tid=38992&extra=page%3D1%26filter%3Dtypeid%26typeid%3D403
str1 = 'I love fishc.com'
print(str1[:6])

str2 = 'xiaoxie'
print(str2.capitalize())

str2 = 'DXXLL'
print(str2.casefold())
print(str2.center(40))
print(str2.count('X'))
print(str2.endswith('L'))

str3 = 'I\tlove\tFishC.com'
print(str3.expandtabs())
print(str3.find('c'))

str4 = 'OOoo'
print(str4.islower())

str5 = 'Fishc'
print(str5.istitle())
print(str5.join('12345'))

str6 = '          i love you'
print(str6.lstrip())

str6 = 'i love fishc'
print(str6.partition('ov'))
print(str6.replace('fishc', 'FishC'))
print(str6.split())

str7 = '        sssssaaaassss    '
print(str7.strip())
print(str7.strip().strip('s'))

str8 = 'FishC'
print(str7.swapcase())

str8 = 'sssssaaaassss'
print(str8.translate(str.maketrans('s', 'b')))

