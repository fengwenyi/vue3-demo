<template>
  <div>
    <h1>计算器</h1>
    <input v-model="state.a" />+<input v-model="state.b" />={{ state.result }}
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Calculator",
  setup() {
    const state = reactive({
      a: 0,
      b: 0,
      result: computed(() => parseInt(state.a) + parseInt(state.b)),
    });
    return {
      state
    };
  }
};
</script>