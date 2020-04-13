//创建全局组件
Vue.component('Greeting',{
    //html模板
    // template: `
    //     <p>
    //     这是全局组件,可以在任何实例的容器中使用
    //     我的名字是${this.name}
    //     </p>
    // `,
    template: `
        <p>
        这是全局组件,可以在任何实例的容器中使用
        我的名字是{{name}}
        <button @click='changeName'>改名</button>
        </p>
    `,

    //属性
    data(){
        return {
            name: '米斯特吴',
            wechat: '12121212'
        }
    },
    //方法
    methods: {
        changeName(){
            this.name = '米修在线';
        }
    }
})

const one = new Vue({
    el: '#vue-app-one'
});

const two = new Vue({
    el: '#vue-app-two'
});
