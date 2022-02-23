<template>
  <select-date :dateList="years" v-model="year" />
  <select-date :dateList="months" v-model="month" />
  <select-date :dateList="days" v-model="day" />
  <p>{{ year + month + day }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import selectDate from "@/atoms/select-date.vue";

export default defineComponent({
  components: {
    selectDate,
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const year = ref("");
    const month = ref("");
    const day = ref("");

    const years = ["2022", "2021", "2020"];
    const months = ["01", "02", "03"];
    const days = ["01", "31"];

    watch([year, month, day], () => {
      emit("update:modelValue", year.value + month.value + day.value);
    });

    return {
      years,
      months,
      days,
      year,
      month,
      day,

      // modelUpdate,
    };
  },
});
</script>
