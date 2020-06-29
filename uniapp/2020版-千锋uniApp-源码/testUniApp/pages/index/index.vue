<template>
	<view class="content">
		<text>我是首页</text>
		{{"Msea"}}
		<view>{{msg}}</view>
		<view>{{msg+"Msea"}}</view>
		<view>{{"Msea".indexOf("sea")!==-1?"最靓的仔":"NO"}}</view>
		<view>{{"我爱北京天安门".slice(0,1)}}</view>
		<view>{{false||""||"给你买条改"}}</view>
		<img :src="url">
		<test></test>
		
		<!-- <view class="box{{1}}">test</view> -->
		<view :class="'box'+1">test</view>
		<view :style="{width:'100px',height:'100px',background:'red'}"></view>
		<view :style="[{width:'100px',height:'100px',background:'green'}]"></view>
		<view :class="{box111:true}"></view>
		<view :class="['box111','box222']"></view>
		<view>
			<!-- <view wx:for="xxx in  xxx" >{{item}}</view> -->
			<view 
				v-for="(item,index) in names" 
				:key="index"
				:class="{box333:index===currentIndex}"
				@click="setIndexNum(index)"
				>
				{{item}}
			</view>	
		</view>
		<view :class="[{box111:true},'box222']"></view>
		<button type="primary" @click="toPath">toNews</button>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	export default {
		data() {
			return {
				msg:"lili",
				url:"https://www.baidu.com/img/bd_logo1.png",
				names: ['lili','luce','haha','feifei'],
				currentIndex:0
			}
		},
		components:{
			test
		},
		onLoad() {
		
		},
		methods: {
			setIndexNum(index){
				this.currentIndex=index;
			},
			toPath(){
				/*
				非tabbar配置的页面我们使用 navigateTo
				跳转时保留老页面,一般用于需要返回
				 */
				 uni.navigateTo({
					url:"../one/one"
				})
				
				
				/* 跳转pages.json>tabbar>配置过的页面,使用 switchTab
				uni.switchTab({
					url:"../news/news"
				}) */
			}
		}
	}
</script>

<style>
	.box111{
		width:100px;
		height:100px;
		background:pink;
	}
	.box222{
		border:1px solid #4CD964;
	}
	.box333{
		background:yellow;
	}
</style>
