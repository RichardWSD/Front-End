<template>
	<view class="container">
		<scroll-view class="scroll" scroll-y="true"  @scrolltolower="scrolltolower">
			<view class="wrap" v-for="(item,index) in moviesList" :key="index">
					  <view class="left">
						  <image mode="aspectFill" :src="item.images.small"/>
					  </view>
					  <view class="right">
						  <view class="title">{{item.title}}<text class="scro">{{item.rating.average||"即将上映"}}</text></view>
						  <view>{{item.year}} </view>
						  <!-- <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view> -->
						  <view>{{item.genres.join()}}</view>
					  </view>
			</view>
			<view v-if="isShow" style="text-align: center;font-size:16px;color:#808080">没有更多数据了</view>
		</scroll-view>
	</view>
</template>

<script>
	import {comingSoon,newMovies,top250} from "../../apis"
	export default {
		data() {
			return {
				testList:["即将上映的电影","豆瓣电影新片榜","豆瓣电影Top250"],
				typeNum:-1,
				start:0,
				moviesList:[],
				isShow:false
			};
		},
		onLoad(option){
			uni.showLoading({
				title:"加载中",
				mask:true
			})
			this.typeNum=this.testList.indexOf(option.title); //0,1,2
			this.getClassData(this.typeNum)({city:this.$store.state.city,count:10,start:0}).then(res=>{
				let [err,data]=res;
				this.moviesList=data.data.subjects;
				uni.hideLoading()
			})
		},
		methods:{
			scrolltolower(){
				uni.showLoading({
					title:"加载中",
					mask:true
				})
				this.start+=10;
				this.getClassData(this.typeNum)({city:this.$store.state.city,count:10,start:this.start}).then(res=>{
					let [err,data]=res;	
					let subjects=data.data.subjects;
					if(subjects.length===0){
						this.isShwo=true;
					}
					Array.prototype.push.apply(this.moviesList,subjects)
					uni.hideLoading()
					// var arr1=[1,2,3];
					// var arr2=[4,5,6];
					// 最终改变的是arr1
					// console.log(data);
					// this.moviesList=data.data.subjects;
					// console.log(this.moviesList);
				})
			},
			getClassData(state){
				let fnList=[comingSoon,newMovies,top250];
				return fnList[state]; 
			},
			// _comingSoon(){
			// 	return comingSoon({
			// 		city:this.$store.state.city,
			// 		start:"0",
			// 		count:"8"
			// 	})
			// },
			// _newMovies(){
			// 	return 	newMovies({
			// 		city:this.$store.state.city,
			// 		start:"0",
			// 		count:"8"
			// 	})
			// },
			// _top250(){
			// 	return top250({
			// 		city:this.$store.state.city,
			// 		start:"0",
			// 		count:"8"
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
.container{
	overflow:hidden;
	.scroll{
		height: 667*2upx;
	}
	.wrap{
		display: flex;
		border-bottom: 1px solid #C8C7CC;
		padding:20upx 30upx;
		.left{
			width: 168upx;
			height:208upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.right{
			flex: 1;
			margin-left:20upx;
			.title{
				font-size:40upx;
				color:black;
			}
			view{
				font-size:30upx;
				color:#C0C0C0;
			}
			.scro{
				background:rgba(247, 76, 49,1);
				padding:2upx 6px;
				border-radius: 6px;
				color:#fff;
				float:right;
				font-size:25upx;
			}
		}
	}
}
</style>
