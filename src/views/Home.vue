<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    aaa
    <input type="text" :value="filtered" @input="tempText = $event.target.value" />
  </div>
  <div>
    {{ tempText }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const filterTest = ref("");
    const tempText = ref("");
    const filtered = computed(() => {
      return "$" + tempText.value;
    });
    return {
      filterTest,
      filtered,
      tempText,
    };
  },
});
</script>
