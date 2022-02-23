<template>
  <select v-model="dateValue">
    <option v-for="(val, index) in dateList" :value="val" :key="index">
      {{ val }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    dateList: { type: Array },
  },
  setup() {
    const dateValue = ref("");

    return {
      dateValue,
    };
  },
});
</script>
