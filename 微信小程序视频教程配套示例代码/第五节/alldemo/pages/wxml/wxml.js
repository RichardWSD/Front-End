
Page({
  data: {
    message:'Hello MINA!',
    message2:{
      abc:'test abc'
    },
    id:'1',
    condition:false,
    flag:1,
    a: 1,
    b: 3,
    c: 3,
    d:4,
    arr:[1,2,3,4,5,6],
    length:6,
    name:'MINA',
    zero: 0,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },
    items: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  onLoad: function () {
    
  },
  switchCondition:function(){
    this.setData({
      condition:!this.data.condition,
      length:6
    });
  },
  tapName: function(event) {
    console.log(event);
    wx.request({
      url: 'http://johnnynie.gotoip2.com/index.html',
      header: {
          'Content-Type': 'application/html'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})
