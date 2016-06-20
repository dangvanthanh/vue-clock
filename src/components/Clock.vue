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
      self.minutes = self.getZeroPad(now.getMinutes())
      self.hourtime = self.getHourTime(self.hours)
      self.hours = self.hours % 12 || 12

      setTimeout(self.updateDateTime, 1000)
    },
    getHourTime (h) {
      return h >= 12 ? 'PM' : 'AM'
    },
    getZeroPad (n) {
      return (parseInt(n, 10) >= 10 ? '' : '0') + n
    }
  }
}
</script>
