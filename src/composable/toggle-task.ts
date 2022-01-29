import { Task } from "@/interface/Task";
import { Ref } from "vue";

export function togglingTask(tasks: Ref<Task[]>): {
  toggleTask: (task: Task, status: boolean) => void;
} {
  const toggleTask = (task: Task, status: boolean) => {
    const index = tasks.value.indexOf(task);
    tasks.value.splice(index, 1, { ...task, status });
  };

  return {
    toggleTask,
  };
}
