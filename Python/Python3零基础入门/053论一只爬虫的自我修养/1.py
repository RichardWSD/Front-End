import urllib.request

response = urllib.request.urlopen('http://www.fishc.com')
html = response.read()
print(html)

html = html.decode('utf-8')
print(html)