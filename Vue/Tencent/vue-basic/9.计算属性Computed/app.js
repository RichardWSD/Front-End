new Vue({
    el: '#vue-app',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // 当我们点击Add to A按钮时不仅addToA会执行，addToB也会执行，那么每次都会渲染跟这次操作无关的DOM结构，比较耗费性能
        /*addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }*/
    },
    computed: {
        // Vue采用虚拟DOM技术，只有虚拟DOM和真实DOM不同才会触发方法；但是methods则不管怎么都会执行
        // 如果是在computed中使用返回一个函数，vue底层会在每次计算computed的时候对比新旧值，如果不同则会进行重新渲染
        // 因为每次都是返回一个新函数，那么每次都得重新渲染，那跟直接使用函数没什么区别
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }
    }
});
