var myArray = [1, 2, 3, 4];
myArray.desc = 'xxx';

//会把desc忽略掉，不能break
myArray.forEach(value => console.log(value));

for (var n in myArray) {
    // if(n == '1')
    //     break;
    console.log(n); //0,1,2,3,desc，打出的是键
    console.log(myArray[n]); //打出的是值
}

for (var i of myArray) {
    if (i > 2)
        break;
    console.log(i); //打出的是1，2，3，4
}