Vue.component('greeting', {
    // 注意：模板只有能一个根标签
    template: `
    <p>
        {{name}}：大家好，给大家介绍一下我的女朋友@关晓彤
        <button v-on:click="changeName">改名</button>
    </p>
    `,
    data:function(){
        return {
            name:"鹿晗"
        }
    },
    methods:{
        changeName:function(){
            this.name="Henry";
        }
    }
});

Vue.component("CustomTr",{
    template: `<div>2222</div>`
  });

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one',
    data: {
        someattr: 'href',
        atValue: 'http://www.baidu.com'
    }
});

new Vue({
    el: '#vue-app-two'
});
