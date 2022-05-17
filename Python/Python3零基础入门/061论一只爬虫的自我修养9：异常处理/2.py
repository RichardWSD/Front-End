import urllib.request
import urllib.error

try:
    req = urllib.request.Request('http://www.fishc.com/ooxx.html')
    urllib.request.urlopen(req)
except urllib.error.HTTPError as e:
    print(e.code)
    print(e.read())