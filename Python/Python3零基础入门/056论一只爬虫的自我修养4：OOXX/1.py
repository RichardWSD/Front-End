import urllib.request
import os

def url_open(url):
    req = urllib.request.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36')
    response = urllib.request.urlopen(req)
    html = response.read()
    return html

def get_page(url):
    html = url_open(url).decode('utf-8')
    # a = html.find('current-comment-page')
    # b = html.find(']', a)
    a = html.find('Older Comments')+22
    b = html.find('class="previous-comment-page"')-2
    return  'http:' + html[a:b]

def find_imgs(url):
    html = url_open(url).decode('utf-8')
    img_addrs = []
    a = html.find('img src=')

    while a != -1:
        b = html.find('.jpg', a, a+255)
        if b != -1:
            img_addrs.append('http:' + html[a+9:b+4])
        else:
            b = a + 9

        a = html.find('img src=', b)

    return img_addrs

def save_imgs(folder, img_addrs):
    for each in img_addrs:
        filename = each.split('/')[-1]
        with open(filename, 'wb') as f:
            img = url_open(each)
            f.write(img)

def download_mm(folder='OOXX', pages=10):
    os.mkdir(folder)
    os.chdir(folder)

    url = 'http://jandan.net/ooxx/'
    # page_num = int(get_page(url))

    # for i in range(pages):
    #     page_num -= i
    #     page_url = url + 'page-' + str(page_num) + '#comments'
    #     img_addrs = find_imgs(page_url)
    #     save_imgs(folder, img_addrs)
    for i in range(pages):
        url = url if(i==0) else get_page(url)
        img_addrs = find_imgs(url)
        save_imgs(folder, img_addrs)

if __name__ == '__main__':
    download_mm()