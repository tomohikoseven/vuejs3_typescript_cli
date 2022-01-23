<template>
  <div>
    <input type="text" v-model="taskNameRef" />
    <button @click="addTask(taskNameRef)">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    addTask: Function,
  },
  setup() {
    const taskNameRef = ref("");

    return {
      taskNameRef,
    };
  },
});
</script>
<style lang="scss" scoped></style>
