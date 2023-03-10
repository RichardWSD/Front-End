import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true,
	state:{
    profile:{
      // phone: 'xxx'
    },
		products:[
	        {name:"马云",price:200},
	        {name:"马化腾",price:140},
	        {name:"马冬梅",price:20},
	        {name:"马蓉",price:10}
	      ]
	},
	//获取store中的数据
	getters:{
		saleProducts: (state) =>{
			var saleProducts = state.products.map(product =>{
		        return {
		          name: "**" + product.name + "**",
		          price: product.price / 2
		        };
		    });
		    return saleProducts;
		}
	},
	//通过事件更改store中的数据
	mutations:{
    setProfile(state, payload){
      state.profile = {
        phone: payload
      }
      // Vue.set(state.profile, 'phone', payload) // state.profile.phone = payload;
    },
		reducePrice: (state,payload) =>{
			// setTimeout(function(){
				state.products.forEach(product =>{
			        product.price -= payload;
			    })
		    // },3000);
		}
	},
	actions:{
		reducePrice:(context,payload) =>{
			setTimeout(function(){
				context.commit("reducePrice",payload);
			},2000);
		}
	}
});






