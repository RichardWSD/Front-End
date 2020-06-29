import Vue from 'vue'
import Vuex from "vuex"
// 引入腾讯地图 jssdk文件
import  QQMapWX from "../static/js/qqmap-wx-jssdk.min.js"
Vue.use(Vuex);

import {getInTheaters} from "../apis"

export default new Vuex.Store({
	state:{
		city:"北京市",
		nowPlayingList:{}
	},
	mutations:{
		
	},
	actions:{
		getCity(context){
			uni.showLoading({
			    title: '加载中'
			});
			// 检测用户是否授权
			uni.authorize({
				scope:"scope.userLocation",
				success(){
					// 引入腾讯地图api
					let qqmapsdk = new QQMapWX({
					     key: 'UVUBZ-QJD6F-6MDJP-JDHV4-BW3SK-KXBFD'
					 });
					uni.getLocation({
					    type: 'gcj02', 
					    success: function (res) {
					        // console.log('当前位置的经度：' + res.longitude);
					        // console.log('当前位置的纬度：' + res.latitude);
							
							// reverseGeocoder(options:Object)
							// console.dir(qqmapsdk)
							qqmapsdk.reverseGeocoder({
								location:{
									latitude: res.latitude,
									longitude:  res.longitude
								},
								success(res){
									context.state.city=res.result.address_component.city;
									
									getInTheaters(
										{
											start:"0",
											count:"8",
											city:context.state.city
										}
									).then(res=>{
										let  [error, data]  = res;
										context.state.nowPlayingList=data.data;
										uni.hideLoading()
									})
								}
							})
					    }
					});
				},
				fail(res){
					// console.log(res)
					uni.showToast({
						icon :"none",
					    title: '需要获取您位置,否则部分功能不能使用',
					    duration: 2000
					});
				}
			})
		},
		alipay(context){
			getInTheaters(
				{
					start:"0",
					count:"8",
					city:context.state.city
				}
			).then(res=>{
				let  [error, data]  = res;
				console.log(data);
				context.state.nowPlayingList=data.data;
			})
		}
	}
})