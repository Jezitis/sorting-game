<template>
  <div class="main-process">
    <counter :counter="correctAnswers" :counterType="'correct'"/>
    <task :step="step" v-if="gameInProgress && !gameEnded" :wasteItem="wasteItem"/>
    <button class="counter repeat" v-if="gameEnded">
      <span class="counter__icon repeat"></span>
      <span class="counter__value" @click="$emit('on-retry')">Еще раз</span>
    </button>
    <counter :counter="incorrectAnswers" :counterType="'incorrect'"/>
  </div>
</template>
<script>
import Counter from './Counter.vue';
import Task from './Task.vue';

export default {
  name: 'MainProcess',
  components: {
    Counter,
    Task
  },
  props: {
    correctAnswers: {
      type: Number,
      default: 0
    },
    incorrectAnswers: {
      type: Number,
      default: 0
    },
    step: {
      type: String,
      default: ''
    },
    gameEnded: {
      type: Boolean,
      defaut: false
    },
    gameInProgress: {
      type: Boolean,
      defaut: false
    },
    wasteItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>