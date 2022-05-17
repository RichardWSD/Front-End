import urllib.request
#这句相当于
# req = urllib.request.Request("http://placekitten.com/g/200/300")
# response = urllib.request.urlopen(req)
response = urllib.request.urlopen("http://placekitten.com/g/200/300")
cat_img = response.read()
with open('cat_200_300.jpg', 'wb') as f:
    f.write(cat_img)

print(response.geturl())
print(response.info())
print(response.getcode())