var Clock = { template: "<div class=clock><div class=clock__hours><span class=clock__hourtime>{{hourtime}}</span> {{hours}}</div><div class=clock__minutes>{{minutes}}</div></div>",
  data: function data() {
    return {
      hours: '',
      minutes: '',
      hourtime: ''
    };
  },
  ready: function ready() {
    this.updateDateTime();
  },

  methods: {
    updateDateTime: function updateDateTime() {
      var self = this;
      var now = new Date();

      self.hours = now.getHours();
      self.minutes = self.getZeroPad(now.getMinutes());
      self.hourtime = self.getHourTime(self.hours);
      self.hours = self.hours % 12 || 12;

      setTimeout(self.updateDateTime, 1000);
    },
    getHourTime: function getHourTime(h) {
      return h >= 12 ? 'PM' : 'AM';
    },
    getZeroPad: function getZeroPad(n) {
      return (parseInt(n, 10) >= 10 ? '' : '0') + n;
    }
  }
};

var app = new Vue({
  el: 'body',
  components: {
    Clock: Clock
  }
});