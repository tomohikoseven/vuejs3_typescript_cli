import { ref, computed, ComputedRef } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useFizzBuzz() {
  const count = ref(1);

  const result: ComputedRef<string> = computed(() => {
    if (count.value % 15 == 0) {
      return "FizzBuzz";
    } else if (count.value % 5 == 0) {
      return "Fizz";
    } else if (count.value % 3 == 0) {
      return "Buzz";
    } else {
      return count.value.toFixed();
    }
  });

  return {
    count,
    result,
  };
}
