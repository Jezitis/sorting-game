<template>
  <div class="container">
    <header class="header">
      <h1 class="heading">{{ heading }}</h1>
    </header>
    <main class="main">
      <transition name="fade" mode="out-in">
        <button
          class="start-game"
          v-if="!gameInProgress && !gameEnded"
          @click="start"
        >
          Начать!
        </button>
        <main-process
          :correctAnswers="correctAnswers"
          :incorrectAnswers="incorrectAnswers"
          :step="step"
          :gameEnded="gameEnded"
          :gameInProgress="gameInProgress"
          :wasteItem="currentItem"
          v-if="gameInProgress || gameEnded"
          @on-retry="start"
        />
      </transition>
    </main>
    <footer class="footer">
      <buck
        @on-choose="choose"
        v-for="buck in bucks"
        :key="buck.type_id"
        :type_id="buck.type_id"
        :descr="buck.descr"
        :disabled="!gameInProgress"
      />
    </footer>
  </div>
</template>
<script>
import Buck from "../components/bucks/Buck.vue";
import MainProcess from "../components/process/MainProcess.vue";
import { gsap } from "gsap";

import {
  DEFAULT_TIMER,
  FULL_DASH_ARRAY,
  START_GAME,
  GAME_ENDED,
} from "../constants";

export default {
  name: "Game",
  components: {
    Buck,
    MainProcess,
  },
  data() {
    return {
      limit: DEFAULT_TIMER,
      timeLeft: DEFAULT_TIMER,
      interval: null,
      randomItemIndex: null,
      correctAnswers: null,
      incorrectAnswers: null,
    };
  },
  computed: {
    heading() {
      return this.$store.getters.heading;
    },
    bucks() {
      return this.$store.getters.bucks;
    },
    gameInProgress() {
      return this.$store.getters.gameInProgress;
    },
    gameEnded() {
      return this.$store.getters.gameEnded;
    },
    circleLength() {
      return this.$store.getters.circleLength;
    },
    step() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(
        0
      )} ${this.circleLength.toFixed(0)}`;
    },
    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.limit;
      return rawTimeFraction - (1 / this.limit) * (1 - rawTimeFraction);
    },
    wasteItems() {
      return this.$store.getters.wasteItems;
    },
    currentItem() {
      return this.wasteItems[this.randomItemIndex];
    },
  },
  methods: {
    start() {
      this.timer = DEFAULT_TIMER;
      this.timeLeft = DEFAULT_TIMER;
      this.$store.commit(START_GAME);
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.getRandomItem(this.wasteItems.length);
      this.interval = setInterval(() => (this.timeLeft -= 1), 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.$store.commit(GAME_ENDED);
    },
    getRandomItem(max) {
      this.randomItemIndex = Math.floor(Math.random() * max);
    },
    choose(ev) {
      let target = ev.target;
      target.value == this.currentItem.type_id
        ? (this.correctAnswers += 1)
        : (this.incorrectAnswers += 1);
      this.getRandomItem(this.wasteItems.length);
      gsap.to(ev.target.parentElement.children[1], {
        duration: 1,
        top: 41,
        repeat: 1,
        yoyo: true,
      });
    },
  },
  watch: {
    timeLeft() {
      if (this.timeLeft == 0) this.stop();
    },
    correctAnswers() {
      gsap.fromTo(
        ".waste-item",
        { color: "black", borderColor: "black" },
        {
          duration: 0.5,
          color: "rgb(80, 216, 1)",
          borderColor: "rgb(80, 216, 1)",
          repeat: 1,
          yoyo: true,
        }
      );
    },
    incorrectAnswers() {
      gsap.fromTo(
        ".waste-item",
        { color: "black", borderColor: "black" },
        {
          duration: 0.5,
          color: "rgb(255, 53, 53)",
          borderColor: "rgb(255, 53, 53)",
          repeat: 1,
          yoyo: true,
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
