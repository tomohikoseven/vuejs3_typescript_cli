<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input-task :addTask="addTask"></input-task>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <label>{{ task.name }}</label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { addingTask } from "@/composables/input-task";
import { Task } from "@/interfaces/task";
import inputTask from "@/atoms/input-task.vue";

export default defineComponent({
  name: "About",
  components: {
    inputTask,
  },
  setup() {
    const tasks = ref<Task[]>([]);
    const { addTask } = addingTask(tasks);

    return {
      addTask,
      tasks,
    };
  },
});
</script>
