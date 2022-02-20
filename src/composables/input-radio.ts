import { ref, Ref } from "vue";

export function selectingRadio(): {
  picked: Ref;
  selectRadio: (e: { target: HTMLInputElement }) => void;
} {
  const picked = ref("");

  const selectRadio = (e: { target: HTMLInputElement }) => {
    picked.value = e.target.value;
  };

  return {
    picked,
    selectRadio,
  };
}
