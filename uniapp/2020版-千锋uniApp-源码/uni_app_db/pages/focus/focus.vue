<template>
	<view class="container" v-if="Object.keys(nowPlayingList).length!==0">
	 	 <image :src="nowPlayingList.subjects[0].images.small"/>
		 <button class="start" @click="toPath">立即体验</button> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onReady(){
			// #ifdef MP-WEIXIN
				this.$store.dispatch("getCity");
			// #endif
			// #ifdef MP-ALIPAY
			this.$store.dispatch("alipay")
			// #endif
		},
		computed:{
			nowPlayingList(){
				return this.$store.state.nowPlayingList;
			}
		},
		methods:{
			toPath(){
				uni.redirectTo({
					url:"../list/list"
				})
			}
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
			image{
				width: 100%;
				height: 100%;
			}
			.start{
				position: absolute;
				bottom:20upx;
				left:50%;
				transform: translate(-50%,-50%);
				border:1px solid #C0C0C0;
				background:rgba(255,255,255,0.5);
				border-radius: 4px;
				color:black;
			}
		
	}
</style>
