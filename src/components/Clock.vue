<template>
  <div class="clock">
    <div class="clock__hours">
      <span class="clock__hourtime">{{hourtime}}</span>
      {{hours}}
    </div>
    <div class="clock__minutes">{{minutes}}</div>
    <div class="clock__seconds">{{seconds}}</div>
  </div>
</template>

<script>
import { getHourTime, getZeroPad } from '../filters'

export default {
  data () {
    return {
      hours: '',
      minutes: '',
      seconds: '',
      hourtime: ''
    }
  },
  mounted () {
    this.updateDateTime()
  },
  methods: {
    updateDateTime () {
      let self = this
      let now = new Date()

      self.hours = now.getHours()
      self.minutes = getZeroPad(now.getMinutes())
      self.seconds = getZeroPad(now.getSeconds())
      self.hourtime = getHourTime(self.hours)
      self.hours = self.hours % 12 || 12

      setTimeout(self.updateDateTime, 1000)
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #dd4a38;
  margin: 0;
  color: #444;
  font-size: 16px;
  line-height: 1.5;
}

.container {
  max-width: 25rem;
  margin: 50px auto;
}

.clock {
  background: #fff;
  border: .3rem solid #fff;
  border-radius: .5rem;
  display: inline-block;
  margin-bottom: 1em;
}

.clock__hours,
.clock__minutes,
.clock__seconds {
  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);
  display: inline-block;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  padding: .5rem 1rem;
  text-align: center;
  position: relative;
}

.clock__hours {
  border-right: .15rem solid #fff;
  border-radius: .5rem 0 0 .5rem;
}

.clock__minutes {
  border-right: .15rem solid #fff;
}

.clock__seconds {
  border-radius: 0 .5rem .5rem 0;
}

.clock__hourtime {
  font-size: 1rem;
  position: absolute;
  top: 2px;
  left: 8px;
}
</style>
