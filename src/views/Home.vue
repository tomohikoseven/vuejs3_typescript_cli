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
import { defineComponent, computed, ref, Ref } from "vue";

interface Task {
  status: boolean;
  name: string;
}

const useTaskList = () => {
  const tasksRef: Ref<Task[]> = ref<Task[]>([]);

  const toggleTask = (task: Task, status: boolean) => {
    const index = tasksRef.value.indexOf(task);
    tasksRef.value.splice(index, 1, { ...task, status: status });
  };

  return {
    tasksRef,
    toggleTask,
  };
};

const useAddingTask = (tasksRef: Ref<Task[]>) => {
  const taskNameRef: Ref<string> = ref("");

  const addTask = () => {
    tasksRef.value.push({
      name: taskNameRef.value,
      status: false,
    });
    taskNameRef.value = "";
  };

  return {
    taskNameRef,
    addTask,
  };
};

const useFilter = (tasks: Ref<Task[]> = ref([])) => {
  const tasksRef: Ref<Task[]> = tasks;

  const doingTasks = computed(() => tasksRef.value.filter((t: Task) => !t.status));
  const completedTasks = computed(() => tasksRef.value.filter((t: Task) => t.status));

  return {
    doingTasks,
    completedTasks,
  };
};

const useSearcher = (tasks: Ref<Task[]> = ref([])) => {
  const searchTextRef = ref("");
  const tasksRef = tasks;

  const search = computed(() =>
    tasksRef.value.filter((t: Task) => t.name.includes(searchTextRef.value))
  );

  return {
    searchTextRef,
    search,
  };
};

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
