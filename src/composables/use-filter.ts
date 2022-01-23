import { computed, Ref, ref, ComputedRef } from "vue";
import Task from "@/data/Task";

export default function useFilter(tasks: Ref<Task[]> = ref([])): {
  doingTasks: ComputedRef<Task[]>;
  completedTasks: ComputedRef<Task[]>;
} {
  const tasksRef: Ref<Task[]> = tasks;

  const doingTasks = computed(() => tasksRef.value.filter((t: Task) => !t.status));
  const completedTasks = computed(() => tasksRef.value.filter((t: Task) => t.status));

  return {
    doingTasks,
    completedTasks,
  };
}
