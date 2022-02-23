<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input-radio :select-radio="selectRadio" />
  <div>
    <span>Picked:{{ picked }}</span>
  </div>
  <div>
    <select-calender @rewrite="ReWrite" />
  </div>
  <div>max:{{ selectingDate }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import inputRadio from "@/molecules/input-radio.vue";
import { selectingRadio } from "@/composables/input-radio";
import selectCalender from "@/molecules/select-calender.vue";

export default defineComponent({
  name: "About",
  components: {
    inputRadio,
    selectCalender,
  },
  setup() {
    const { picked, selectRadio } = selectingRadio();
    const selectingDate = ref("");
    const ReWrite = (e: string) => {
      console.log("in ReWrite." + e);
      selectingDate.value = e;
    };
    return {
      picked,
      selectingDate,
      selectRadio,
      ReWrite,
    };
  },
});
</script>
