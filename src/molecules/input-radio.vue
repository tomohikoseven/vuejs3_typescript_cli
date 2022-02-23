<template>
  <div>
    <ul>
      <li v-for="(r, index) in rList" :key="index">
        <input
          type="radio"
          :id="r.id"
          :value="r.val"
          name="num"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        <label :for="r.id">{{ r.val }}</label>
        <br />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { radioList } from "@/composables/input-radio";

export default defineComponent({
  props: {
    selectRadio: Function,
  },
  setup() {
    const rList = radioList;
    return {
      rList,
    };
  },
});
</script>
