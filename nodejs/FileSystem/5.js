var fs = require('fs');

var filename = '2.txt';

//向着一个指定的文件中写入数据,如果该文件不存在则新建,如果存在则新的内容会覆盖原有的内容
/* fs.writeFile(filename, 'hello', function() {
    console.log(arguments);
}) */

/* fs.appendFile(filename, '-leo', function() {
    console.log(arguments);
}) */

/* fs.exists(filename, function(isExists) {
    if(!isExists){
        fs.writeFile(filename, 'miaov', function(err) {
            if(err){
                console.log('出错了');
            }else{
                console.log('创建文件成功');
            }
        })
    }else{
        fs.appendFile(filename, '-leo', function(err) {
            if(err){
                console.log('新的内容追加失败');
            }else{
                console.log('新的内容追加成功');
            }
        })
    }
}) */

if(!fs.existsSync(filename)){
    fs.writeFileSync(filename, 'miaov');
    console.log('新文件创建成功');
}else{
    fs.appendFileSync(filename, '-leo');
    console.log('新的内容追加成功');
}