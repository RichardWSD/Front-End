<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
    <span>{{ phone }}</span>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    //获取getter里面的方法，这个es6语法，所以我们要安装babel这个插件转成es5才能被浏览器识别
    ...mapGetters(["saleProducts"]),
    ...mapState({
      phone: state => state.profile.phone
    })
  },
  methods: {
    //获取action里面的方法
    ...mapActions(["reducePrice"]),

    //触发mutation中的方法
    // reducePrice:function (amount) {
    //   this.$store.commit('reducePrice', amount)
    //   }

    //触发action的方法
    // reducePrice: function(amount) {
    //   this.$store.dispatch("reducePrice", amount);
    // }
  },
  created(){
    console.log('profile:', this.$store.state.profile);
    setTimeout(() => {
      this.$store.commit('setProfile', '15521198864')
      console.log('profile:', this.$store.state.profile);
    }, 2000);
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
