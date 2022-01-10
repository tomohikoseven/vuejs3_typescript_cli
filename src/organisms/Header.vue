<template>
  <div class="wrapper">
    <Img></Img>
    <Title title="タイトル"></Title>
    <Title title="右"></Title>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/atoms/Title.vue";
import Img from "@/atoms/Img.vue";

export default defineComponent({
  components: {
    Title,
    Img,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.wrapper {
  display: flex;
}
.wrapper > div {
  flex: 1;
}
</style>
