<template>
  <div>
    <add-task :addTask="addTask"></add-task>
  </div>
  <div><input type="text" v-model="searchTextRef" />Search</div>
  <div class="task-list-wrapper">
    <task-row title="DOING" :tasks="doingTasks" :toggleTask="toggleTask" />
    <task-row title="COMPLETED" :tasks="completedTasks" :toggleTask="toggleTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddTask from "@/organisms/AddTask.vue";
import TaskRow from "@/organisms/TaskRow.vue";

import useFilter from "@/composables/use-filter";
import useTaskList from "@/composables/use-task-list";
import useAddingTask from "@/composables/use-adding-task";
import useSearcher from "@/composables/use-searcher";

export default defineComponent({
  name: "About",
  components: {
    AddTask,
    TaskRow,
  },
  setup() {
    const { tasksRef, toggleTask } = useTaskList();
    const { addTask } = useAddingTask(tasksRef);
    const { searchTextRef, search } = useSearcher(tasksRef);
    const { doingTasks, completedTasks } = useFilter(search);

    return {
      // state
      tasksRef,
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
