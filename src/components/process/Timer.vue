<template>
  <svg class="timer" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="timer__circle">
      <circle class="timer__path-elapsed" cx="50" cy="50" :r="radius" />
      <path
        :stroke-dasharray="step"
        class="timer__path-remaining"
        d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
      ></path>
    </g>
  </svg>
</template>
<script>
import { DEFAULT_RADIUS } from "../../constants";
export default {
  name: "Timer",
  props: {
    step: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      radius: DEFAULT_RADIUS,
    };
  },
};
</script>
