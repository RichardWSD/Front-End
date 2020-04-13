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
