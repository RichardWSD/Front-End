Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3', 'item4'],
    modalHidden:true,
    modalHidden2:true,
    toast1Hidden:true,
    loadingHidden:true
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  modalTap:function(){
    this.setData({
      modalHidden:false
    });
  },
  modalTap2:function(){
    this.setData({
      modalHidden2:false
    });
  },
  modalChange:function(){
    this.setData({
      modalHidden:true
    });
  },
  modalChange2:function(){
    this.setData({
      modalHidden2:true
    });
  },
  toast1Tap:function(){
    this.setData({
      toast1Hidden:false
    });
  },
  toast1Change:function(){
    this.setData({
      toast1Hidden:true
    });
  },
  loadingTap:function(){
    var THIS=this;
    this.setData({
      loadingHidden:false
    });
    setTimeout(function(){
      THIS.setData({
        loadingHidden:true
      })
    },1500)
  },
  loadingChange:function(){
    console.log("loadingChange");
  },
  bindItemTap:function(e){
    console.log('tap--------------------------------- ' + e.currentTarget.dataset.name);
    console.log('tap--------------------------------- ' + e.currentTarget.dataset.type);
   this.setData({
     actionSheetHidden: !this.data.actionSheetHidden
    })
  }
})