<template>
  <div>
    <h4>--- {{ taskStatus }} ---</h4>
    <ul>
      <li v-for="(task, index) of tasks" :key="index">
        {{ task.name }}
        <button @click="toggleTask(task, toggleStatus)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Task } from "@/interface/Task";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    taskStatus: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
    toggleStatus: {
      type: Boolean,
      required: true,
    }
  },
  setup(prop, context) {
    function toggleTask(task: Task, status: boolean) {
      task.status = status;
      context.emit("toggle-task", task);
    }
    return {
      toggleTask,
    };
  },
});
</script>

<style lang="scss" scoped></style>
