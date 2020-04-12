Page({
    data:{
      
    },
    showToast:function(){
        wx.showToast({
            title: '成功',
            icon: 'loading',
            duration: 10000
        });
        setTimeout(function(){
            wx.hideToast()
        },2000);
    },
    showModal:function(){
        wx.showModal({
            title: '提示',
           // showCancel:false,
           cancelText:'Cancel',
           confirmText:'Confirm',
            content: '这是一个模态弹窗',
            success: function(res) {
                if (res.confirm) {
                console.log('用户点击确定')
                }
            }
        })
    },
    showActionSheet:function(){
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function(res) {
                if (!res.cancel) {
                console.log(res.tapIndex)
                }
            }
        })
    },
    setNavigationBarTitle:function(){
        wx.setNavigationBarTitle({
            title: '当前页面'
        });
        
    },
    showNavigationBarLoading:function(){
        wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading:function(){
        wx.hideNavigationBarLoading();
    },
    showAnimationPage:function(){
        wx.navigateTo({
          url: '../animation/animation',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})