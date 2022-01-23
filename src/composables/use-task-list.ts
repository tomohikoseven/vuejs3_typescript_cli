import { Ref, ref } from "vue";
import Task from "@/data/Task";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useTaskList(): {
  tasksRef: Ref<Task[]>;
  toggleTask: (task: Task, status: boolean) => void;
} {
  const tasksRef: Ref<Task[]> = ref<Task[]>([]);

  const toggleTask = (task: Task, status: boolean) => {
    const index = tasksRef.value.indexOf(task);
    tasksRef.value.splice(index, 1, { ...task, status: status });
  };

  return {
    tasksRef,
    toggleTask,
  };
}
