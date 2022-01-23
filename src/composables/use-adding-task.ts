import { Ref } from "vue";
import Task from "@/data/Task";

export default function useAddingTask(tasksRef: Ref<Task[]>): {
  addTask: (taskName: string) => void;
} {
  const addTask = (taskName: string) => {
    console.log(taskName);
    tasksRef.value.push({
      name: taskName,
      status: false,
    });
  };

  return {
    addTask,
  };
}
