<template>
  <div class="task">
    <timer :step="step"/>
    <waste-item :wasteItem="wasteItem"/>
  </div>
</template>
<script>
import Timer from './Timer.vue'
import WasteItem from './WasteItem.vue'

export default {
  name: 'Task',
  components: {
    Timer,
    WasteItem
  },
  props: {
    step: {
      type: String,
      default: ''
    },
    wasteItem: {
      type: Object,
      required: true
    }
  }
}
</script>