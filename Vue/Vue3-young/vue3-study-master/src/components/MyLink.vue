<script>
import {h} from 'vue'
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  render() {
    return h("a", { href: this.to }, this.$slots.default());
  },
};
</script>
