import { Ref } from "vue";
import { Task } from "@/interface/Task";

export function addingTask(tasksRef: Ref<Task[]>): {
  addTask: (taskName: string) => void;
} {
  const addTask = (taskName: string) => {
    tasksRef.value.push({ name: taskName, status: false });
  };

  return {
    addTask,
  };
}
