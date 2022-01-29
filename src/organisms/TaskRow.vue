<template>
  <div>
    <h4>--- {{ taskStatus }} ---</h4>
    <ul>
      <li v-for="(task, index) of tasks" :key="index">
        {{ task.name }}
        <button @click="togglingTask(task, toggleStatus)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
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
    togglingTask: {
      type: Function,
      required: true,
    },
    toggleStatus: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
