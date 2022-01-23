<template>
  <div>
    <input type="text" v-model="taskNameRef" />
    <button @click="addTask">Add</button>
  </div>
  <div><input type="text" v-model="searchTextRef" />Search</div>
  <div class="task-list-wrapper">
    <ul>
      <h4>DOING</h4>
      <li v-for="(task, index) in doingTasks" :key="index">
        <input type="checkbox" :checked="task.status" disabled />
        <label>{{ task.name }}</label>
        <button @click="toggleTask(task, true)">toggle</button>
      </li>
    </ul>
    <ul>
      <h4>COMPLETED</h4>
      <li v-for="(task, index) in completedTasks" :key="index">
        <input type="checkbox" :checked="task.status" disabled />
        <label>{{ task.name }}</label>
        <button @click="toggleTask(task, false)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useFilter from "@/composables/use-filter";
import useTaskList from "@/composables/use-task-list";
import useAddingTask from "@/composables/use-adding-task";
import useSearcher from "@/composables/use-searcher";

export default defineComponent({
  name: "About",
  setup() {
    const { tasksRef, toggleTask } = useTaskList();
    const { taskNameRef, addTask } = useAddingTask(tasksRef);
    const { searchTextRef, search } = useSearcher(tasksRef);
    const { doingTasks, completedTasks } = useFilter(search);

    return {
      // state
      tasksRef,
      taskNameRef,
      searchTextRef,
      // Computed
      doingTasks,
      completedTasks,
      // Functions
      addTask,
      toggleTask,
    };
  },
});
</script>
