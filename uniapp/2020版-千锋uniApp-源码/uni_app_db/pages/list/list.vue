<template>
	<view class="container">
		<!-- 正在上映的电影-北京 banner -->
		<view class="bannerList">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1500">
				<swiper-item v-for="(item,index) in nowPlayingList.subjects" :key="index">
					<image mode="widthFix" class="slider" :src="item.images.small" @click="toDtails(item.id)"/>
				</swiper-item>
			</swiper>
		</view>
		<!-- 推荐 -->
		<view class="list" v-for="(item,index) in moviesList" :key="index">
			<view class="title">{{item.title}}<text @click="toClass(item.title)">></text></view>
			 <scroll-view scroll-x="true" style="white-space: nowrap;">
			  <view class="slider" v-for="(it,idx) in item.subjects" :key="idx">
				  <image mode="aspectFill" :src="it.images.small" @click="toDtails(it.id)"/>
				  <view class="name">{{it.title}}</view>
			  </view>
			</scroll-view> 
		</view> 

	</view>
</template>

<script>
	import {comingSoon,newMovies,top250} from "../../apis"
	export default {
		data() {
			return {
				moviesList:[]
			}
		},
		onReady(){
			this.pageInit();
		},
		computed:{
			nowPlayingList(){
				return this.$store.state.nowPlayingList;
			}
		},
		methods: {
			pageInit(){
				uni.showLoading({
				    title: '加载中'
				});
				Promise.all([
					this._comingSoon(),
					this._newMovies(),
					this._top250()
					]).then((res)=>{
						uni.hideLoading();
						let rel=[];
						res.map((item)=>{
							rel.push(item[1].data)
						})
						this.moviesList=rel;
						console.log(this.moviesList)
					})
			},
			toDtails(id){
				uni.navigateTo({
					url:"../dtails/dtails?id="+id
				})
			},
			toClass(title){
				uni.navigateTo({
					url:"../class/class?title="+title
				})
			},
			_comingSoon(){
				return comingSoon({
					city:this.$store.state.city,
					start:"0",
					count:"8"
				})
			},
			_newMovies(){
				return 	newMovies({
					city:this.$store.state.city,
					start:"0",
					count:"8"
				})
			},
			_top250(){
				return top250({
					city:this.$store.state.city,
					start:"0",
					count:"8"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	background:#2C405A;
	.bannerList{
		.swiper{
			height:400upx;
			.slider{
					width:100%;
				   }
		}
	}
	.list{
		margin-top:40upx;
		background:#2e4461;
		.title{
			color: #fff;
			margin-left :20upx;
			padding:10upx 0;
			text{
				float:right;
				padding:0 10upx;
			}
		}
		.slider{
			width: 180upx;
			margin-left:20upx;
			display:inline-block;
			text-overflow:ellipsis;
			image{
				width: 100%;
				height:300upx;
			}
			.name{
				text-align: center;
				color:#fff;
				overflow: hidden;
			}
		}
	}
}
</style>
