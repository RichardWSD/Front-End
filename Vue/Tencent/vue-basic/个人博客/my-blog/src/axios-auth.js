import axios from 'axios'

//可以为不同的地址配置不一样的axios设置，然后把这个axios实例导入到相应的组件中
const instance = axios.create({
  baseURL:"https://vue-demo-26067.firebaseio.com"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance