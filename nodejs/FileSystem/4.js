var fs = require('fs');

fs.open('1.txt', 'r+', function(err, fd){
    if(err){
        console.log('文件打开失败');
    }else{
        //当我们要对打开的文件进行写操作的时候,打开文件的模式应该是 读写 模式
        /*
            fs.write(fd, buffer, length[, position], callback)
            fd: 通过open方法成功打开一个文件返回的编号
            buffer: buffer对象
            offset: buffer对象中要写入的数据的起始位置
            length: 要写入的buffer的数据的长度
            position: fd中的起始位置
            callback:
                err
                buffer的长度
                buffer对象
         */

         var bf = new Buffer('123');
        //  fs.write(fd, bf, 0, 3, 0, function() {
        //      console.log(arguments);
        //  })

        //另外一种write版本
        //fs.write(fd, data [,position] [,encoding])
        fs.write(fd, '1234')

        //关闭文件
        fs.close(fd, function() {

        })
    }
})