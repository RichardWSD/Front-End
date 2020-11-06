new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        _job:'xxxx'
    },
    //用于存储各种方法
    methods: {
        greet: function(time){
            //注意在Vue里面，不需要通过this.data.name这种方式来拿值，实际这样也拿不到。只需用this.xxx拿data里面的xxx值就可以了
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
