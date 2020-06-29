<template>
	<view>
	<!-- 	<view class="box1"></view>
		<view class="box2"></view> -->
		<view class="ld">
			 <view class="left">
				 <view 
					v-for="(item,index) in list" 
					:key="index" 
					@click="setId(index)"
					:class="{active:index===currentNum}"
					>
					 {{item.title}}
				 </view>
			 </view>
			 <view class="right">
				<scroll-view  
					:scroll-y="true"  
					style="white-space: nowrap;height:200px;"
					:scroll-into-view="clickId"
					scroll-with-animation
					@scroll="scroll"
					@scrolltolower="scrolltolower"
					>
					 <view v-for="(item,index) in list" :key="index">
							<view class="title" :id="'po'+index">{{item.title}}</view>
							<view v-for="(it,idx) in item.list" :key="idx">
								{{it}}
							</view>
					 </view> 
				 </scroll-view>	 
			 </view>
		</view>
		<uni-rate value="2"></uni-rate>
		<vuew>
			<view>Vuex测试</view>
			<view>{{name}}</view>
			<view>数量:{{num}}</view>
			<view>总价:{{count}}</view>
			<button type="primary" @click="add">add</button>
			<button type="primary" @click="testActions">testActions</button>
		</vuew>
		<view>
			<view v-for="(item,index) in testList" :key="index">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "../../components/uni-rate/uni-rate.vue"
	export default {
		data() {
			return {
				list:[
					{title:"中餐",list:["盖饭","扒饭","咖喱饭","鸡排饭"]},
					{title:"西餐",list:["牛排","意面","芝士","汉堡"]},
					{title:"法餐",list:["辣子鸡丁","xxx","肥仔快乐水","填缝隙"]},
					{title:"快餐",list:["薯条","丸子","粥","饮料"]},
				],
				clickId:"",
				currentNum:0,
				topList:[],
				text:"xxx",
				name:this.$store.state.name
			}
		},
		components:{
			uniRate
		},
		computed:{
			num(){
				return this.$store.state.num;
			},
			count(){
				return this.$store.getters.count;
			},
			testList(){
				return this.$store.state.testList;
			}
		},
		onReady(){
			this.getNodesInfo();
			
			// 测试请求
			this.testRequest();
		},
		methods: {
			setId(index){
				this.clickId="po"+index;
				this.currentNum=index;
			},
			scroll(e){
				let scrollTop=e.target.scrollTop;
				for(let i=0;i<this.topList.length;i++){
					let h1=this.topList[i];
					let h2=this.topList[i+1];
					if(scrollTop>=h1&&scrollTop<h2){
						this.currentNum=i;
					}
				}
			},
			scrolltolower(){
					setTimeout(()=>{
						this.currentNum=3;
					}, 80);
			},
			add(){
				this.$store.commit("add");
			},
			testActions(){
				this.$store.dispatch("testActions");
			},
			getNodesInfo(){
				// console.log(document)
				// console.log(window)
				const query = uni.createSelectorQuery().in(this);
				// document.querySelector
				// document.querySelectorAll
				// query.selectAll('.title').boundingClientRect().selectAll('.box2').boundingClientRect().exec((res)=>{
				// 	console.log(res);
				// });
				query.selectAll('.title').boundingClientRect().exec((res)=>{
					let nodes=res[0];
					let rel=[];
					nodes.map(item=>{
						rel.push(item.top)
					})
					this.topList=rel;
				});
			},
			testRequest(){
				uni.request({
				    url: 'https://bird.ioliu.cn/weather', //仅为示例，并非真实接口地址。
				    data: {
				        city: '北京'
				    },
				    header: {
				        // 'token': 'xxx' //自定义请求头信息
				    },
				    success: (res) => {
				        // this.text = 'request success';
						console.log(res);
				    }
				});
			}
			
		}
	}
</script>

<style lang="scss">
.box1{
	width:100px;
	height:100px;
	background: red;
}
.box2{
	width:200upx;
	height:200upx;
	background: yellow;
}
.ld{
	display: flex;
	.left{
		width:100px;
		border:1px solid red;
	}
	.right{
		flex: 1;
		border:1px solid red;
		.title{
			font-size: 20px;
			font-weight: bold;
			background:pink;
		}
	}
}
.active{
	background:red;
}


</style>
