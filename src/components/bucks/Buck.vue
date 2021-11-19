<template>
  <div class="buck">
    <span
      class="buck__descr"
      :class="{
        yellow: type_id == 1,
        green: type_id == 2,
        blue: type_id == 3,
        red: type_id == 4,
      }"
      >{{ descr }}</span
    >
    <span
      class="buck__top"
      :class="{
        yellow: type_id == 1,
        green: type_id == 2,
        blue: type_id == 3,
        red: type_id == 4,
      }"
    ></span>
    <button
      class="buck__container"
      :class="{
        yellow: type_id == 1,
        green: type_id == 2,
        blue: type_id == 3,
        red: type_id == 4,
      }"
      @click="$emit('on-choose', $event)"
      :value="type_id"
      :disabled="disabled"
    ></button>
  </div>
</template>
<script>
export default {
  name: "Buck",
  props: {
    type_id: {
      type: Number,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>
