<template>
  <div>
    Task:
    <input type="text" v-model="taskName" />
    <button @click="addTask(taskName)">Add</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    addTask: Function,
  },
  setup() {
    const taskName = ref("");
    return {
      taskName,
    };
  },
})
</script>
