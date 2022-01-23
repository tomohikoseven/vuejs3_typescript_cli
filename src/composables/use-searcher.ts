import { ComputedRef, Ref, ref, computed } from "vue";
import Task from "@/data/Task";

export default function useSearcher(tasks: Ref<Task[]> = ref([])): {
  searchTextRef: Ref<string>;
  search: ComputedRef<Task[]>;
} {
  const searchTextRef = ref("");
  const tasksRef = tasks;

  const search = computed(() =>
    tasksRef.value.filter((t: Task) => t.name.includes(searchTextRef.value))
  );

  return {
    searchTextRef,
    search,
  };
}
