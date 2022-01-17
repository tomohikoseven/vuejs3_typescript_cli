<template>
  <div>
    <input type="text" v-model="state.taskName" />
    <button @click="addTask">Add</button>
  </div>
  <div><input type="text" v-model="state.searchText" />Search</div>
  <div class="task-list-wrapper">
    <ul>
      <h4>DOING</h4>
      <li v-for="(task, index) in state.doingTasks" :key="index">
        <input type="checkbox" :checked="task.status" disabled />
        <label>{{ task.name }}</label>
        <button @click="toggleTask(task, true)">toggle</button>
      </li>
    </ul>
    <ul>
      <h4>COMPLETED</h4>
      <li v-for="(task, index) in state.completedTasks" :key="index">
        <input type="checkbox" :checked="task.status" disabled />
        <label>{{ task.name }}</label>
        <button @click="toggleTask(task, false)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

interface Task {
  status: boolean;
  name: string;
}

interface State {
  taskName: string;
  tasks: Array<Task>;
  searchText: string;
  doingTasks: Array<Task>;
  completedTasks: Array<Task>;
  searchedTasks: Array<Task>;
}

export default defineComponent({
  name: "About",
  setup() {
    const state: State = reactive({
      taskName: "",
      tasks: [],
      searchText: "",
      doingTasks: computed(() => state.searchedTasks.filter((t: Task) => !t.status)),
      completedTasks: computed(() => state.searchedTasks.filter((t: Task) => t.status)),
      searchedTasks: computed(() =>
        state.tasks.filter((t: Task) => t.name.includes(state.searchText))
      ),
    });

    function addTask() {
      state.tasks.push({
        name: state.taskName,
        status: false,
      });
      state.taskName = "";
    }

    function toggleTask(task: Task, status: boolean) {
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1, { ...task, status: status });
    }

    return {
      state,
      addTask,
      toggleTask,
    };
  },
});
</script>
