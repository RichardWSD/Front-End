import scrapy

from tutorial.items import DmozItem

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://www.dmoz-odp.org/Computers/Programming/Languages/Python/Books/",
        "http://www.dmoz-odp.org/Computers/Programming/Languages/Python/Resources/"
    ]

    def parse(self, response):
        sel = scrapy.selector.Selector(response)
        sites = sel.xpath('//div[@class="title-and-desc"]')
        items = []
        for site in sites:
            item = DmozItem()
            item['title'] = site.xpath('a/div[@class="site-title"]/text()').extract()
            item['link'] = site.xpath('a/@href').extract()
            item['desc'] = site.xpath('div[@class="site-descr "]/text()').extract()
            items.append(item)

        return items

#新建项目: scrapy startproject tutorial
#运行scrapy: scrapy crawl xxx(scrapy名)
#运行scrapy并输出为json文件: scrapy crawl dmoz -o items2.json -t json
#进去scrapy的shell窗口进行测试: scrapy shell "http://www.dmoz-odp.org/Computers/Programming/Languages/Python/Books/"

#在Scrapy中是使用一种基于XPath和Css的表达式机制: Scrapy Selectors
#Selectors是一个选择器，它有四个基本的方法：
# xpath()： 传入spath表达式，返回该表达式所对应的所有节点的selector list列表
# css()：传入CSS表达式，返回该表达式所对应的所有节点的selector list列表
# extract()：序列化该节点为unicode字符串并返回list
# re()：根据传入的正则表达式对数据进行提取，返回unicode字符串list列表
