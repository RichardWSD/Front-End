new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
        refName:'',
        checkVal: true,
        selectVal: 'saab',
        picked: '',
        msg: '',
        mulInput:[
            {a: 'a'},
            {b: 'b'}
        ],
        dvalue: '双向绑定'
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
        },
        handleInput(event){
            debugger
            this.$emit('input', event.target.value);
        }
    }
});
