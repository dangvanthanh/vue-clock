# Vue Clock

> Simple clock component using Vue.js

![](screenshot.png)

## Install

### CDN

```html
<script src="https://unpkg.com/@dangvanthanh/vue-clock"></script>
```

### NPM

```shell
$ npm install @dangvanthanh/vue-clock --save
```

## Usage

### Vue

```javascript
import Vue from "vue";
import VueClock from "@dangvanthanh/vue-clock";

Vue.use(VueClock);
```

```vue
<template>
  <div class="app">
    <h3>Display all</h3>
    <VueClock />
    <h3>Hidden hour</h3>
    <VueClock :isHour="false"/>
    <h3>Hidden minute and second</h3>
    <VueClock :isMinute="false" :isSecond="false" />
    <h3>With timeZone</h3>
    <VueClock timeZone="'America/New_York'" />
  </div>
</template>

<script>
import VueClock from '@dangvanthanh/vue-clock'

export default {
  components: { VueClock },
}
</script>
```

### Nuxt (or SSR)

```javascript
import Vue from "vue";
import VueClock from "@dangvanthanh/vue-clock";

Vue.component("VueClock", VueClock);
// or
// Vue.use(VueClock);
```

# Props

| Name       | Type      | Default                                     | Description                                             |
| ---------- | --------- | ------------------------------------------- | ------------------------------------------------------- |
| `is24h`    | `Boolean` | `false`                                     | Display 24h or not                                      |
| `isHour`   | `Boolean` | `true`                                      | Display/hidden hour                                     |
| `isMinute` | `Boolean` | `true`                                      | Display/hidden minute                                   |
| `isSecond` | `Boolean` | `true`                                      | Display/hidden second                                   |
| `timeZone` | `String`  | Your current timeZone such as `Asia/Saigon` | [List of Time Zones](https://timezonedb.com/time-zones) |

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
