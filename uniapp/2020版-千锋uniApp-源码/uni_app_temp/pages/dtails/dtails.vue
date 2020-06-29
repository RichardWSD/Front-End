<template>
	<view class="container">
			<image class="repeat-img" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
			<view class="shade">
			 <image class="repeat-img" :src="'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2566665806.jpg'"/>
				<view class="nar">
					<view class="title">
						柏拉图梦想
					</view>
					<view class="eva">
						<view>评分</view>
						<view>评分</view>
						<view>评分</view>
					</view>
					<view class="des">
						<view>摘要</view>
					</view>
					<view class="cont">
						<text>
							支持下自行车自行车竞争力鲜花卡山东矿机按时发空间很大空间对方好
							支持下自行车自行车竞争力鲜花卡山东矿机按时发空间很大空间对方好
							支持下自行车自行车竞争力鲜花卡山东矿机按时发空间很大空间对方好
							支持下自行车自行车竞争力鲜花卡山东矿机按时发空间很大空间对方好
							支持下自行车自行车竞争力鲜花卡山东矿机按时发空间很大空间对方好
						</text>
					</view>
				</view>
			</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.container{
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	.repeat-img{
		width: 100%;
		height:100%;	
	}
	.shade{
		width:100%;
		height:100%;
		z-index:100;
		overflow-y: auto;
		position: absolute;
		background:rgba(255,255,255,0.7);
		top:0;
		text-align:center;
		image{
			width: 640upx;
			height:800upx;
			margin-top:40upx;
		}
	}
	.nar{
		color:#444;
		padding:0 60upx;
		border:1px solid red;
		.title{
			font-size:40upx;
			font-weight: bold;
		}
		.eva{
			font-size:30upx;
			text-align: left;
			view{
				margin-top:20upx;
			}
		}
		.des{
			font-size:40upx;
			text-align: left;
			font-weight: bold;
			margin-top:20upx;
		}
		.cont{
			margin-top:20upx;
			text-align: left;
		}
	}
}
</style>
