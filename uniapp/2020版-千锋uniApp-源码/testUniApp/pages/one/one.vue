<template>
	<view>
		<text>我是one页</text>
		<button type="primary" @click="toPath">toTwo</button>
		<button type="primary" @click="goBack">返回</button>
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
					url:"../two/two"
				})
			},
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

</style>
