<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input-radio v-model="picked" />
  <div>
    <span>Picked:{{ picked }}</span>
  </div>
  <div>
    <select-calender v-model="selectingDate" />
  </div>
  <div>max:{{ selectingDate }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import inputRadio from "@/molecules/input-radio.vue";
import selectCalender from "@/molecules/select-calender.vue";

export default defineComponent({
  name: "About",
  components: {
    inputRadio,
    selectCalender,
  },
  setup() {
    const picked = ref("");
    const selectingDate = ref("");
    return {
      picked,
      selectingDate,
    };
  },
});
</script>
