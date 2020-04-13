<template>
    <childcom :name="name" :age="age" type="text"></childcom>
</template>
<script>
export default {
    'name':'test',
    props:[],
    data(){
        return {
            'name':'张三',
            'age':'30',
            'sex':'男'
        }
    },
    components:{
        'childcom':{
            inheritAttrs:false, //不加这句的话则父组件传递的type="text"覆盖了input 上type="number"
            props:['name','age'],
            template:`<input type="number" style="border:1px solid blue">`,
            created () {
                console.log(this.$attrs.type)
            }
        }
    }
}
</script>