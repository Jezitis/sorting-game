<template>
  <div
    class="counter"
    :class="{
      correct: counterType == 'correct',
      incorrect: counterType == 'incorrect',
    }"
  >
    <span
      class="counter__icon"
      :class="{
        correct: counterType == 'correct',
        incorrect: counterType == 'incorrect',
      }"
    ></span>
    <span class="counter__value">{{ counter }}</span>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "Counter",
  props: {
    counter: {
      type: Number,
      default: 0,
    },
    counterType: {
      type: String,
      required: true,
    },
  },
  watch: {
    counter() {
      if(this.counterType == 'correct') {
        gsap.fromTo('.counter .correct', {scale: 2}, {duration: 1.5, scale: 1});
      }
      if(this.counterType == 'incorrect') {
        gsap.fromTo('.counter .incorrect', {scale: 2}, {duration: 1.5, scale: 1});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
