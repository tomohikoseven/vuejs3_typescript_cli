<template>
  <div>
    <input type="text" v-model="taskNameRef" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    addTask: {
      type:Function,
      required: true,
    },
  },
  setup(_, context) {
    const taskNameRef = ref("");

    const addTask = () => {
      context.emit("add-task", taskNameRef.value);
    };

    return {
      taskNameRef,
      // addTask,
    };
  },
});
</script>
