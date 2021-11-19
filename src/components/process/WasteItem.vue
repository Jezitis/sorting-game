<template>
  <div class="waste-item">
    <span class="waste-item__value">{{wasteItem.name}}</span>
  </div>
</template>
<script>
export default {
  name: 'WasteItem',
  props: {
    wasteItem: {
      type: Object,
      required: true
    }
  },
}
</script>