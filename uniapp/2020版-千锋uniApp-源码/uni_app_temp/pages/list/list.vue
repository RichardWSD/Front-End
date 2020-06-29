<template>
	<view class="container">
		<view class="bannerList">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1500">
				<swiper-item>
					<image mode="aspectFill" class="slider" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				</swiper-item>
				<swiper-item>
					<image mode="aspectFill" class="slider" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				</swiper-item>
				<swiper-item>
					<image mode="aspectFill" class="slider" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="title">title</view>
			<scroll-view scroll-x="true" style="border:1px solid red;white-space: nowrap;">
			  <view class="slider" style="background:red;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:cyan;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:yellow;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:black;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  
			</scroll-view>
		</view>
		
		<view class="list">
			<view class="title">title</view>
			<scroll-view scroll-x="true" style="border:1px solid red;white-space: nowrap;">
			  <view class="slider" style="background:red;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:cyan;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:yellow;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:black;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  
			</scroll-view>
		</view>
		
		<view class="list">
			<view class="title">title</view>
			<scroll-view scroll-x="true" style="border:1px solid red;white-space: nowrap;">
			  <view class="slider" style="background:red;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:cyan;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:yellow;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			  <view class="slider" style="background:black;width: 180upx;height:100px;display: inline-block;">
				  <image mode="aspectFill" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				  <view class="name">xxxx</view>
			  </view>
			</scroll-view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
		}
		.slider{
			height:300upx;
			margin-left:20upx;
			image{
				width: 100%;
				height:100%;
			}
			.name{
				text-align: center;
				color:#fff;
			}
		}
	}
}
</style>
