<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Cloudiness</span>
      <span>{{cloudsCurrent.cloudiness}}%</span>
    </div>
    <div class="information">
      <span class="heading">Visibility</span>
      <span class="wind-degree">{{cloudsCurrent.visibility}}m</span>
    </div>
    <div class="information">
      <span class="heading">Humidity</span>
      <span class="wind-degree">{{cloudsCurrent.humidity}}%</span>
    </div>
    <div class="information">
      <span class="heading">Pressure</span>
      <span class="wind-degree">{{cloudsCurrent.pressure}}hPa</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "CloudInfo",
  computed: {
    ...mapGetters("weather", ["cloudsCurrent"])
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