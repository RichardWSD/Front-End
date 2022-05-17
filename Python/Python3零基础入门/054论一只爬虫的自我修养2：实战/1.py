from urllib import request
from urllib import parse
import json

Request_URL = 'http://fanyi.youdao.com/translate?smartresult=dict&smartresult=rule'

#创建 Form_Data 字典，存储上图的 Form Data
Form_Data = {}
Form_Data['i'] = 'i love you'
Form_Data['from'] = 'AUTO'
Form_Data['to'] = 'AUTO'
Form_Data['smartresult'] = 'dict'
Form_Data['client'] = 'fanyideskweb'
Form_Data['salt'] = '1526796477689'
Form_Data['sign'] = 'd0a17aa2a8b0bb831769bd9ce27d28bd'
Form_Data['doctype'] = 'json'
Form_Data['version'] = '2.1'
Form_Data['keyfrom'] = 'fanyi.web'
Form_Data['action'] = 'FY_BY_REALTIME'
Form_Data['typoResult'] = 'false'

#使用 urlencode 方法转换标准格式
data = parse.urlencode(Form_Data).encode('utf-8')

head = {}
# 写入 User Agent 信息
head['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5792.400 QQBrowser/10.2.2101.400'
# 创建 Request 对象
req = request.Request(Request_URL, headers=head)
# 传递 Request 对象和转换完格式的数据
response = request.urlopen(req, data=data)
# 读取信息并解码
html = response.read().decode('utf-8')
# 使用 JSON
translate_results = json.loads(html)

# 找到翻译结果
translate_results = translate_results['translateResult'][0][0]['tgt']
# 打印翻译信息
print("翻译的结果是： %s" % translate_results)