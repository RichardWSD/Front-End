import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	// 全局属性变量
	state:{
		num:0,
		price:10,
		name:'苹果',
		testList:[]
	},
	// 全局同步方法, 调用方法,this.$store.commit("xxx")
	mutations:{
		add(state){
			state.num++;
		}
	},
	//Vuex属性计算,在视图里面当变量使用
	getters:{
		count(state){
			//这个函数的执行依赖一个可变的变量
			return state.num*state.price;
		}
	},
	//异步方法 调用方法,this.$store.dispatch("xxx") 
	actions:{
		testActions(context){
			// context里面包含了 state,mutations,getters,actions
			// console.log(context)
			// 执行一些异步参数,通用ajax
			setTimeout(()=>{
				context.state.testList=["猪猪侠","超人强","喜洋洋","老村长"]
			}, 2000);
		}
	}
	
})
