<template>
  <div class="home">
    <mytest class="wb" :title="title" :massgae="massgae"></mytest>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      title:'title1111',
      massgae:'message111'
    }
  },
  components:{
    'mytest':{
      template:`<div class='ts'>这是个h1标题{{title}}</div>`,
      props:['title'],
      //https://www.jianshu.com/p/ce8ca875c337
      inheritAttrs: false,  //不会把未被注册的props呈现为普通的HTML属性
      data(){
        return{
          mag:'111'
        }
      },
      created:function(){
        console.log(this.$attrs)//注意这里
      }
    }
  }
}
</script>