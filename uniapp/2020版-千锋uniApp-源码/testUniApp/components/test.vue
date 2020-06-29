<template>
	<view>
		<text>我是test组件{{msg}}</text>
		<button type="primary" @click="test">event</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				say:"Msea"
			};
		},
		props:["msg"],
		beforeMount(){
			console.log("在挂载开始之前被调用")
		},
		mounted(){
			console.log("挂载到实例上去之后调用");
			this.$nextTick(function(){
				// 渲染完毕
				console.log("OK");
			})
		},
		methods:{
			test(){
				// this.$emit("testShowName",{name:"Msea"})
				uni.$emit("testEmit",{name:"luce"})
			}
		}
	}
</script>

<style lang="scss">

</style>
