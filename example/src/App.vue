<script setup>
import VueClock from '../../src/VueClock.vue'
import GithubCorner from './components/GithubCorner.vue'
</script>

<template>
  <a class="github-corner" href="https://github.com/dangvanthanh/vue-clock" target="_blank"
    aria-label="View source on Github">
    <GithubCorner />
  </a>
  <div class="clocks">
    <div>
      <h3>Sai Gon</h3>
      <VueClock :timeZone="'Asia/Saigon'" />
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
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .clocks {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.github-corner {
  fill: rgb(21, 21, 19);
  color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
}
</style>
