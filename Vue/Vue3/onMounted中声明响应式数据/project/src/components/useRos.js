import { ref, onMounted } from 'vue'

export function useRos() {
  const rosCount = ref(1)
  function count() {
    rosCount.value++
  }
  return { rosCount, count }
}