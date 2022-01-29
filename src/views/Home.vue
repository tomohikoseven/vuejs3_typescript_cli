<template>
  <div>
    <add-task @add-task="addTask" />
    <div class="wrapper">
      <task-row
        taskStatus="DOING"
        :tasks="doingTasks"
        @toggle-task="toggleTask"
        :toggleStatus="true"
      />
      <task-row
        taskStatus="COMPLETE"
        :tasks="completeTasks"
        @toggle-task="toggleTask"
        :toggleStatus="false"
      />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, Ref, computed } from "vue";
import AddTask from "@/organisms/AddTask.vue";
import { Task } from "@/interface/Task";
import { addingTask } from "@/composable/add-task";
import TaskRow from "@/organisms/TaskRow.vue";
import { togglingTask } from "@/composable/toggle-task";

export default defineComponent({
  components: {
    AddTask,
    TaskRow,
  },
  setup() {
    const tasks: Ref<Task[]> = ref<Task[]>([]);
    const { addTask } = addingTask(tasks);
    const { toggleTask } = togglingTask(tasks);

    const doingTasks = computed(() => tasks.value.filter((task: Task) => !task.status));
    const completeTasks = computed(() => tasks.value.filter((task: Task) => task.status));


    return {
      // data
      doingTasks,
      completeTasks,

      // function
      addTask,
      toggleTask,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
