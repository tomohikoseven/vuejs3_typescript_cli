import { Task } from "@/interface/Task";
import { computed, ComputedRef, Ref } from "vue";

export function doFilter(tasks: Ref<Task[]>): {
  doingTasks: ComputedRef;
  completeTasks: ComputedRef;
} {
  const doingTasks = computed(() => tasks.value.filter((task: Task) => !task.status));
  const completeTasks = computed(() => tasks.value.filter((task: Task) => task.status));
  return {
    doingTasks,
    completeTasks,
  };
}
