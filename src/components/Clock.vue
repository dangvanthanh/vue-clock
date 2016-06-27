<template>
  <div class="clock">
    <div class="clock__hours">
      <span class="clock__hourtime">{{hourtime}}</span>
      {{hours}}
    </div>
    <div class="clock__minutes">{{minutes}}</div>
  </div>
</template>

<script>
import { getHourTime, getZeroPad } from '../utils/helpers.js'

export default {
  data () {
    return {
      hours: '',
      minutes: '',
      hourtime: ''
    }
  },
  ready () {
    this.updateDateTime()
  },
  methods: {
    updateDateTime () {
      let self = this
      let now = new Date()

      self.hours = now.getHours()
      self.minutes = getZeroPad(now.getMinutes())
      self.hourtime = getHourTime(self.hours)
      self.hours = self.hours % 12 || 12

      setTimeout(self.updateDateTime, 1000)
    }
  }
}
</script>
