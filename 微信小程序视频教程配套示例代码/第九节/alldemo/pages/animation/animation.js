Page({
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
        duration: 6000,
        timingFunction: 'ease',
    })

    this.animation = animation

  /*animation.scale(2,2).rotate(45).translate(30).step()

    this.setData({
      animationData:animation.export()
    })

   setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 2000)*/
  },
  doAnimation:function(){
      //this.skew();
      this.rotateAndScale();
  },
  skew:function(){
    //this.animation.skew(45,20).step();
    this.animation.width(300).step();
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step({duration:1000})
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
     this.animation.scale(2, 2).step();
    this.animation.rotate(45).step();
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})