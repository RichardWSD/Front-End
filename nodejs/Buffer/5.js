/*
类方法,静态方法
 */

/* console.log(Buffer.isEncoding('utf-8'));
console.log(Buffer.isEncoding('gbk'));
console.log(Buffer.isEncoding('hex'));

var arr = [1,2,3];
var bf = new Buffer(10);

console.log(Buffer.isBuffer(arr));
console.log(Buffer.isBuffer(bf));

var str1 = 'miaov';
console.log(str1.length);
console.log(Buffer.byteLength(str1));

var str2 = '妙味';
console.log(str2.length);
console.log(Buffer.byteLength(str2, 'utf-8'));
*/

var str1 = 'miaov';
var str2 = '妙味';

var list = [new Buffer(str1), new Buffer(str2)];
console.log(list);


var bf = Buffer.concat(list);
//var bf = BUffer.concat(list, 11);   //如果能给出拼接后字节的长度(第二个参数),可以减少性能的损失
console.log(bf);


