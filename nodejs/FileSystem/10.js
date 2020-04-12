var fs = require('fs');

var filedir = './miaov/source';

fs.watch(filedir, function(ev, file) {
    //只要有一个文件发生了变化,我们就需要对这个文件夹下的所有文件进行读取,然后合并
    fs.readdir(filedir, function(err, dataList) {
        var arr = [];

        dataList.forEach(function(f) {
            var info = fs.statSync(filedir + '/' + f);
            //console.log(info);

            if(info.mode = 33206){
                arr.push(filedir + '/' + f)
            }

        })

        //读取数组中的文件内容,并合并
        var content = '';
        arr.forEach(function(f) {
            var c = fs.readFileSync(f);
            //console.log(c);

            content += c.toString() + '\n';
        })

        //console.log(content);
        fs.writeFile('./miaov/js/index.js', content);
    })
})