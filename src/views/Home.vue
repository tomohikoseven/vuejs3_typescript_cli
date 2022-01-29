<template>
  <div>
    <add-task :add-task="addTask" />
    <div class="wrapper">
      <task-row
        taskStatus="DOING"
        :tasks="doingTasks"
        :toggle-task="toggleTask"
        :toggleStatus="true"
      />
      <task-row
        taskStatus="COMPLETE"
        :tasks="completeTasks"
        :toggle-task="toggleTask"
        :toggleStatus="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { Task } from "@/interface/Task";
import AddTask from "@/organisms/AddTask.vue";
import TaskRow from "@/organisms/TaskRow.vue";
import { addingTask } from "@/composable/add-task";
import { togglingTask } from "@/composable/toggle-task";
import { doFilter } from "@/composable/do-filter";

export default defineComponent({
  components: {
    AddTask,
    TaskRow,
  },
  setup() {
    const tasks: Ref<Task[]> = ref<Task[]>([]);
    const { addTask } = addingTask(tasks);
    const { toggleTask } = togglingTask(tasks);
    const { doingTasks, completeTasks } = doFilter(tasks);

    return {
      // computed
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
