<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="simplest-directiv-example" class="demo">
    <input />
    <input v-focus />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    return {};
  },
});
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
