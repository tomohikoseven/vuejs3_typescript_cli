<template>
  <div class="about">
    <div>
      数値: {{ count }} <br />
      結果: {{ result }} <br />
      <button @click="up">カウントアップ</button>
      <button @click="reset">リセット</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFizzBuzz } from "@/composables/useFizzBuzz";

export default defineComponent({
  name: "About",
  setup() {
    const { count, result } = useFizzBuzz();

    const up = () => {
      count.value++;
    };

    const reset = () => {
      count.value = 1;
    };

    return {
      // data
      count,
      result,
      // function
      up,
      reset,
    };
  },
});
</script>
