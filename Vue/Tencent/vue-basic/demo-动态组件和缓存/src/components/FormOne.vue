<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>填写以下内容</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label for>随便说点啥:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">发送</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from './FormHelper'

export default {
  components:{
"form-helper":FormHelper
  },
  data() {
    return {

    }
  },
  methods: {
    handleSubmit:function() {
      alert('thanks for submitting');
    }
  },
  activated(){
    console.log(11111);
  },
  deactivated(){
    console.log(22222);
  }
}
</script>