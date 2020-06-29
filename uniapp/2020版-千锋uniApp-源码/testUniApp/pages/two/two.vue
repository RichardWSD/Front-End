<template>
	<view>
		<text>我是two页</text>
		<button type="primary" @click="toPath">toOne</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		/* onLoad(option){
			路由获取参数
			console.log(option);
		} */
		methods:{
			toPath(){
				uni.redirectTo({
					url:"../one/one"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
