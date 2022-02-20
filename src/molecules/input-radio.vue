<template>
  <div>
    <ul>
      <li v-for="(r, index) in radioList" :key="index">
        <input type="radio" :id="r.id" :value="r.val" name="num" @change="selectRadio" />
        <label :for="r.id">{{ r.val }}</label>
        <br />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    selectRadio: Function,
  },
  setup() {
    const radioList = [
      { id: "one", val: "One" },
      { id: "two", val: "Two" },
      { id: "three", val: "Three" },
    ];

    return {
      radioList,
    };
  },
});
</script>
