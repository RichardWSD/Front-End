<template>
  <!-- v-theme和v-rainbow是自定义指令 -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <!-- key值只能是string或者number -->
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
      <!-- 注意这里不是直接用to，用to的话只能是一个字符串的值 -->
      <router-link v-bind:to="'/blog/' + blog.id">
        <!-- to-uppercase是自定义过滤器 -->
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from "../axios-auth";
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  //如果访问本地的json文件那么需要把数据文件放在static文件夹里才可以
  created() {
    // this.$http.get('https://wd1182543348jfzvtq.wilddogio.com/posts.json')
    axios.get('/posts.json')
    	.then(function(data){
        return data.data;
    	})
      .then((data) => {
        var blogsArray = [];
        for(let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      })

    //旧的方式
    // this.$http.get("https://vue-demo-26067.firebaseio.com/posts.json")
    //   .then(function(data) {
    //     // console.log(data);
    //     // console.log(data.json())
    //     return data.json();
    //   })
    //   .then(function(data){
    //     //console.log(data);
    //     var blogsArray = [];
    //     for(let key in data){
    //       data[key].id = key;
    //       blogsArray.push(data[key]);
    //     }
    //     this.blogs = blogsArray;
    //   })
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  //自定义过滤器
  filters: {
    // "to-uppercase":function(value){
    // 	return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
         el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
