import urllib.request
import urllib.parse
import json
import time

while True:
    content = input('请输入待翻译的内容（输入"q!"退出程序）：')
    if content == 'q!':
        break

    url = "http://fanyi.youdao.com/translate?smartresult=dict&smartresult=rule"

    '''
    head = {}
    head['User-Agent'] = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
    '''

    # data = {}
    # data['type'] = 'AUTO'
    # data['i'] = content
    # data['doctype'] = 'json'
    # data['xmlVersion'] = '1.6'
    # data['keyfrom'] = 'fanyi.web'
    # data['ue'] = 'UTF-8'
    # data['typoResult'] = 'true'
    data = {}
    data['i'] = content
    data['from'] = 'AUTO'
    data['to'] = 'AUTO'
    data['smartresult'] = 'dict'
    data['client'] = 'fanyideskweb'
    data['salt'] = '1526796477689'
    data['sign'] = 'd0a17aa2a8b0bb831769bd9ce27d28bd'
    data['doctype'] = 'json'
    data['version'] = '2.1'
    data['keyfrom'] = 'fanyi.web'
    data['action'] = 'FY_BY_REALTIME'
    data['typoResult'] = 'false'

    data = urllib.parse.urlencode(data).encode('utf-8')

    req = urllib.request.Request(url, data)
    req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36')

    response = urllib.request.urlopen(req)
    html = response.read().decode('utf-8')

    target = json.loads(html)
    target = target['translateResult'][0][0]['tgt']

    print(target)
    time.sleep(5)
