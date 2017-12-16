<template>
  <div class="app">
    <clock></clock>
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'app',
  components: { Clock }
}
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

.app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
}
</style>
