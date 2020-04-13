<template>
    <div>
        <childcom :name="name" :age="age" :sex="sex"></childcom>
    </div>
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
            props:['name'],
            template:`<div>
                <div>我是子组件   {{name}}</div>
                <grandcom v-bind="$attrs" 
                    :name="name" :class="{ active: true}"
                ></grandcom>
            </div>`,
            components: {
                'grandcom':{
                    template:`
                      <div>我是孙子组件{{$attrs.age}}---{{$attrs}}</div>
                    `,
                    created:function(){
                      console.log(this.$attrs)//注意这里
                    }
                }
            }
        }
    }
}
</script>