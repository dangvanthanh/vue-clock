<script setup>
import VueClock from '../../src/VueClock.vue'
</script>

<template>
  <div class="clocks">
    <div>
      <h3>Sai Gon</h3>
      <VueClock />
    </div>
    <div>
      <h3>New York</h3>
      <VueClock :timeZone="'America/New_York'" />
    </div>
    <div>
      <h3>Tokyo</h3>
      <VueClock :is24h="true" :timeZone="'Asia/Tokyo'" />
    </div>
    <div>
      <h3>London</h3>
      <VueClock :is24h="true" :timeZone="'Europe/London'" />
    </div>
  </div>
</template>

<style scoped>
.clocks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
</style>
