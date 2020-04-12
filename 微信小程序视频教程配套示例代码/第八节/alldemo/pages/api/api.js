Page({
    data:{
        imageSrc:'',
        urls:['http://t1.mmonly.cc/uploads/allimg/150415/22691-m7SNjW.jpg','http://t1.mmonly.cc/uploads/allimg/150415/22691-fBtS8O.jpg'],
        position: 0,
        requestData:[]
    },
    onLoad:function(){
        wx.onBackgroundAudioPause(function(res){
            console.log('背景音乐已暂停');
        });
        wx.onBackgroundAudioPlay(function(res){
            console.log('背景音乐在播放');
        });
        wx.onBackgroundAudioStop(function(res){
            console.log('背景音乐已停止');
        });
    },
    requestFromServer:function(){
        var THIS = this;
        wx.request({
            url: 'http://www.xiaochengxu-wx.com/testdata/requestdemo.js', 
            data: {
                x: '1' ,
                y: '2'
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                var data = res.data;
                THIS.setData({
                    requestData:data
                });
            }
        });
    },
    downLoad:function(){
        wx.downloadFile({
            url: 'http://www.xiaochengxu-wx.com/testdata/requestdemo.js', 
            success: function(res) {
                var tempFilePath = res.tempFilePath;
                console.log("tempFilePath:"+tempFilePath);
                wx.saveFile({
                    tempFilePath: tempFilePath,
                    success: function(res) {
                        console.log("savedFilePath:"+res.savedFilePath);
                        var savedFilePath = res.savedFilePath
                    }
                })
            },
            fail:function(res){
                console.log(res);
            }
        })
        
    },
    choosePic:function(){
        var THIS = this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                THIS.setData({
                    imageSrc:tempFilePaths[0]
                });
                wx.getImageInfo({
                    src: res.tempFilePaths[0],
                    success: function (res) {
                        console.log("width:"+res.width)
                        console.log("height:"+res.height)
                    }
                })
            }
        })
    },
    viewPic:function(){
        wx.previewImage({
            current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
            urls:[
            'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
            'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
            'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
            ]
        })
    },
    startRecord:function(){
        wx.startRecord({
        success: function(res) {
            var tempFilePath = res.tempFilePath;
            wx.playVoice({
                filePath: tempFilePath,
                    complete: function(){
                }
            });
            console.log(tempFilePath);
        },
        fail: function(res) {
            //录音失败
        }
        })
        setTimeout(function() {
        //结束录音  
            wx.stopRecord()
        }, 10000)
    },
    showMusic:function(){
       /* wx.playVoice({
            filePath: 'yinyue.mp3',
            complete: function(){}
        })*/
        wx.playBackgroundAudio({
            dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
            title: '此时此刻',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
        });
        wx.seekBackgroundAudio({
            position: this.data.position
        });
    },
    pauseMusic:function(){
        var THIS = this;
        wx.pauseBackgroundAudio();
        wx.getBackgroundAudioPlayerState({
            success:function(res){
                var currentPosition = res.currentPosition;
                THIS.setData({
                    position:currentPosition
                });
            }   
        });
    },
    stopMusic:function(){
        wx.stopBackgroundAudio();
    },
    setStorage:function(){
        wx.setStorage({
            key:"name",
            data:"张三",
            success:function(res){
                console.log(1);
            }
        });
         wx.setStorage({
            key:"age",
            data:"24",
            success:function(res){
                console.log(1);
            }
        });
        console.log(2);
    },
    getStorage:function(){
        wx.getStorage({
            key:"age",
            success:function(res){
                console.log("data:"+res.data);
            }
        });
        
    },
    removeStorage:function(){
        wx.removeStorage({
            key:"name",
            success:function(res){
                console.log("data:"+res.data);
            }
        });
    },
    clearStorage:function(){
        wx.clearStorage();
    },
    getStorageInfo:function(){
        wx.getStorageInfo({
            success: function(res) {
                console.log(res.keys)
                console.log(res.currentSize)
                console.log(res.limitSize)
            }
        })
    },
    setStorageSync:function(){
        wx.setStorageSync('name', '李四');
        wx.setStorageSync('sex','男');
    },
    getStorageSync:function(){
        var name = wx.getStorageSync('name');
        console.log(name);
    },
    removeStorageSync:function(){
        wx.removeStorageSync('name')
    },
    clearStorageSync:function(){
       wx.clearStorageSync(); 
    },
    getStorageInfoSync:function(){
        var res = wx.getStorageInfoSync()
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
    },
    getLocation:function(){
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed;	
                var accuracy = res.accuracy;
                console.log(latitude);
                console.log(longitude);
                console.log(speed);
                console.log(accuracy);
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    name:'深圳市政府',
                    address:'某地址',
                    scale: 28
                })
            }
        })
    },
    chooseLocation:function(){
       wx.chooseLocation({
           success:function(res){
               console.log(res.name);
               console.log(res.address);
               console.log(res.latitude);
               console.log(res.longitude);
           }
       });
    },
    getSystemInfo:function(){
        wx.getNetworkType({
            success: function(res) {
                var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
                console.log("networkType:"+networkType);
            }
        });
        wx.getSystemInfo({
            success: function(res) {
                console.log("model:"+res.model)
                console.log("pixelRatio:"+res.pixelRatio)
                console.log("windowWidth:"+res.windowWidth)
                console.log("windowHeight:"+res.windowHeight)
                console.log("language:"+res.language)
                console.log("version:"+res.version)
            }
        })
    },
    callPhone:function(){
        wx.makePhoneCall({
            phoneNumber: '10086'
        })
    }
})