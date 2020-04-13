window.onload = function(){
    var vm = new Vue({
        el:'#box',
        methods:{
            show:function(){
                alert(1);
            },
            show1:function(){
                alert(2);
            }
        }
    });
}