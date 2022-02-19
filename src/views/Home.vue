<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    Task:
    <input type="text" v-model="taskName" />
    <!-- <input type="text" :value="taskName" @input="taskName = $event.target.value" /> -->
    <!-- <input type="text" :value="taskName" @change="taskName = $event.target.value" /> -->
    <button @click="addTask">Add</button>
  </div>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <label>{{ task.name }}</label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Task {
  name: string;
}

export default defineComponent({
  name: "About",
  setup() {
    const taskName = ref("");
    const tasks = ref<Task[]>([]);

    const addTask = () => {
      tasks.value.push({ name: taskName.value });
    };

    return {
      taskName,
      addTask,
      tasks,
    };
  },
});
</script>
