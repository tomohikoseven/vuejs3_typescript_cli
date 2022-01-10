<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    title: String,
  },
  setup() {
    return {};
  },
});
</script>
<style>
.title {
  font-size: 1em;
}
</style>
