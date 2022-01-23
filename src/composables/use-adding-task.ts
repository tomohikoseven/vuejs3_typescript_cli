import { Ref, ref } from "vue";
import Task from "@/data/Task";

export default function useAddingTask(tasksRef: Ref<Task[]>): {
  taskNameRef: Ref<string>;
  addTask: () => void;
} {
  const taskNameRef: Ref<string> = ref("");

  const addTask = () => {
    tasksRef.value.push({
      name: taskNameRef.value,
      status: false,
    });
    taskNameRef.value = "";
  };

  return {
    taskNameRef,
    addTask,
  };
}
