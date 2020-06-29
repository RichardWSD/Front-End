<template>
	<view>
		<view v-show="false">v-show</view>
		<view v-if="false">v-if</view>
		<view>xxx</view>
		<swiper class="swiper" indicator-dots="true" autoplay="true"  interval="1500" @change="test">
			<swiper-item >
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"/>
			</swiper-item>	
			<swiper-item>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"/>
			</swiper-item>	
			<swiper-item>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"/>
			</swiper-item>	
		</swiper>	
		 <scroll-view  :scroll-x="true"  style="white-space: nowrap;">
				<view id="demo1" style="display:inline-block;width:200px;height:100px;background:red">A</view>
				<view id="demo2" style="display:inline-block;width:200px;height:100px;background:yellow">B</view>
				<view id="demo3" style="display:inline-block;width:200px;height:100px;background:blue">C</view>
		 </scroll-view>
		 
		
		 
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		onLoad(){
			console.log("页面初始化 执行一次 onLoad")
		},
		onReady(){
			console.log("页面加载完毕 执行一次 onReady")
		},
		onShow(){
			console.log("页面进入执行 执行多次 onShow")
		},
		onHide(){
			console.log("页面进入离开 执行多次 onHide")
		},
		onPullDownRefresh(){
			console.log("用户执行了下拉动作")
		},
		onTabItemTap(){
			console.log("用户点击了Tabbar")
		},
		onShareAppMessage(){
			console.log("用户进行了分享")
			return{
				title:"我是这条街最靓仔",
				path:"pages/news/news",
				imageUrl:"https://www.baidu.com/img/bd_logo1.png"
			}
		},
		methods:{
			test(e){
				console.log(e.detail.current);
			}
			
		}
	}
</script>

<style lang="scss">
.swiper{
	height:300px;
	swiper-item{
		image{
			width: 100%;
			height:100%;
		}
	} 
}


</style>
