/* 
  浏览器定时器与node定时器表现有些不一样，14版本node setTimeout精度挺高，能区分开1,2ms区别
  浏览器在2ms内的定时器精度不高，默认是为0，0和1浏览器都会认为是1
  https://zhuanlan.zhihu.com/p/33087629
*/

for(let i=0; i< 1000;i++){
  let arr=[];
  var test0 = setTimeout(function(){
    arr.push("测试1")
  },1)
  var test2 = setTimeout(function(){
    arr.push("测试2")
  },2)
  var test = setTimeout(function(){
    arr.push("测试无")
  })
  var res = setTimeout(() => {
    if(arr.toString() === '测试1,测试2,测试无'){
      console.log('测试1,测试2,测试无')
    }
  }, 100);
}