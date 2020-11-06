<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Temp</span>
      <span>{{tempCurrent.temp}}°C</span>
    </div>
    <div class="information">
      <span class="heading">Feels like</span>
      <span class="wind-degree">{{tempCurrent.feelsLike}}°C</span>
    </div>
    <div class="information">
      <span class="heading">Sunrise</span>
      <span class="wind-degree">{{sunrise}}</span>
    </div>
    <div class="information">
      <span class="heading">Sunset</span>
      <span class="wind-degree">{{sunset}}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TempInfo",
  computed: {
    ...mapGetters("weather", ["tempCurrent"]),
    sunrise() {
      // const today = new Date(
      //   new Date().getFullYear(),
      //   new Date().getMonth,
      //   new Date().getDate
      // );
      let hours = new Date(+this.tempCurrent.sunrise).getUTCHours();
      if (hours < 10) hours = `0${hours}`;
      let minutes = new Date(+this.tempCurrent.sunrise).getUTCMinutes();
      if (minutes < 10) minutes = `0${minutes}`;
      return `${hours}:${minutes}`;
    },
    sunset() {
      let hours = new Date(+this.tempCurrent.sunset).getUTCHours();
      if (hours < 10) hours = `0${hours}`;
      let minutes = new Date(+this.tempCurrent.sunset).getUTCMinutes();
      if (minutes < 10) minutes = `0${minutes}`;
      return `${hours}:${minutes}`;
    }
  }
};
</script>
<style scoped>
.flex {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.information {
  height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.information-wind-degree {
  flex-direction: row;
  align-items: center;
}

.heading {
  font-size: 1.1rem;
}
</style>