import urllib.request
import urllib.error

try:
    req = urllib.request.Request('http://www.ooxx-fishc.com')
    urllib.request.urlopen(req)
except urllib.error.URLError as e:
    print(e.reason)