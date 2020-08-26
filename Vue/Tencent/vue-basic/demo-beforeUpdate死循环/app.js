Vue.component('my-component', {
    　　template: `<a href='#'>click me</a>`
    })

new Vue({
    　　el: '#app',
    　　methods: {
    　　　　clickFun: function(){
    　　　　　　console.log("11111")
    　　　　}
    　　}
    })