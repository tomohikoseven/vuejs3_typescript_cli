<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input-radio :select-radio="selectRadio" />
  <span>Picked:{{ picked }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import inputRadio from "@/molecules/input-radio.vue";
import { selectingRadio } from "@/composables/input-radio";

export default defineComponent({
  name: "About",
  components: {
    inputRadio,
  },
  setup() {
    const { picked, selectRadio } = selectingRadio();
    return {
      picked,
      selectRadio,
    };
  },
});
</script>
