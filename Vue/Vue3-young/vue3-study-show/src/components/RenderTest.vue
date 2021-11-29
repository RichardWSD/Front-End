<script>
import {h} from 'vue'

export default {
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
  render() {
    this.$slots.default();
    this.$slots.content();
    return h("div", [
      h("div", { onClick: this.onClick }, [
        `I am RenderTest: ${this.counter}`,
        this.$slots.default(),
        this.$slots.content(),
      ]),
    ]);
  },
  methods: {
    onClick() {
      this.$emit("update:counter", this.counter + 1);
    },
  },
};
</script>
