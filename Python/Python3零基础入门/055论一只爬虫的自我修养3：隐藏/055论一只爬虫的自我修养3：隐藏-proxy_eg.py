import urllib.request
import random

#碰到的403问题解决: http://mrdede.com/?p=1301
url = 'https://www.ip.cn/'

iplist = ['101.37.118.54:8888', '101.95.115.196:80', '101.95.115.196:8080']

proxy_support = urllib.request.ProxyHandler({'https ':random.choice(iplist)})

opener = urllib.request.build_opener(proxy_support)
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36')]

urllib.request.install_opener(opener)

response = urllib.request.urlopen(url)
html = response.read().decode('utf-8')

print(html)
