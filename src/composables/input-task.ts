import { Task } from "@/interfaces/task";
import { Ref } from "vue";

export function addingTask(tasks: Ref<Task[]>): { addTask: (taskName: string) => void } {
  const addTask = (taskName: string) => {
    tasks.value.push({ name: taskName });
  };

  return {
    addTask,
  };
}
