new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
        refName:''
    },
    methods: {
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        },
        logRefName:function(){
            console.log(this.$refs.refName);

            this.refName = this.$refs.refName.value;
        }
    }
});
