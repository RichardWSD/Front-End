new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            /* let btn = "btn1"
            this.$refs[btn].click(); */
            alert('you clicked me');
        },
        stopMoving:function(event){
            event.stopPropagation();
        },
        log(){
            event.preventDefault();
            console.log('log');
            
        }
    }
});
