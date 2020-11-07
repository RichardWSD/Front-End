<template>
  <div>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"><comp-one></comp-one></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><comp-two></comp-two></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"><comp-three></comp-three></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"><comp-four></comp-four></el-tab-pane>
    lsfldssdjdldjf
  </el-tabs> -->
  <el-tabs v-model="activeName">
    <el-tab-pane
      v-for="(item, index) in tabs"
      :key="index"
      :label="item"
      :name="item"
    >
    </el-tab-pane>
    <keep-alive>
      <component :is="activeName"></component>
    </keep-alive>
  </el-tabs>
  </div>
</template>

<script>
import CompOne from './CompOne'
import CompTwo from './CompTwo'
import CompThree from './CompThree'
import CompFour from './CompFour'

export default {
  name: 'HelloWorld',
  components: {
    CompOne,
    CompTwo,
    CompThree,
    CompFour
  },
  data() {
      return {
        activeName: 'CompOne',
        tabs: ['CompOne', 'CompTwo', 'CompThree', 'CompFour']
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
