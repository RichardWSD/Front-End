#!/bin/bash
# 在linux上使用crontab来定时运行脚本  查看机器定时任务 crontab -l
# 命令： /bin/bash /home/work/weixinScpirt/nightWarnSecondGroup.sh &>/dev/null
curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=61b28766-1a36-4f55-824c-c3546e8add4e' \
   -H 'Content-Type: application/json' \
   -d '
   {
    "msgtype": "text",
    "text":{
        "mentioned_list":["@all"]
    } }'






curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=61b28766-1a36-4f55-824c-c3546e8add4e' \
   -H 'Content-Type: application/json' \
   -d '
   {
  "msgtype": "markdown",
  "markdown": {
    "content": "<font color=\"info\">现在是18:30分！！！！填写套表，填写套表！！！！！！！！</font>\n> <font>点击 [F8的靓仔靓女，上车了](https://doc.weixin.qq.com/txdoc/excel?scode=AIEAWwfiAAgamUnaJbAHIAQAa-AEo&docid=e2_AMQAPwa-AEoLwIUfngdSwK969StGa&type=1)  进行填写</font>\n> <font>点击 [考试一组研发2组套表](https://doc.weixin.qq.com/txdoc/excel?scode=AIEAWwfiAAgo9cGFMXAJoADAa-AEo&docid=e2_AJoADAa-AEoOnAWOaD1QGeYII13oc&type=1)  进行填写 </font>\n<font>点击 [扫描端套表](https://doc.weixin.qq.com/txdoc/excel?scode=AIEAWwfiAAgAvJKjrHAHIAQAa-AEo&docid=e2_AMQAPwa-AEokxI1V2WNSHu69MjFzo&type=1)     进行填写 </font>" }
}'