<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Speed</span>
      <span>{{windCurrent.speed}} km/h</span>
    </div>
    <div class="information">
      <span class="heading">Degree</span>
      <span class="wind-degree" :style="windDegree"></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "WindInfo",
  computed: {
    ...mapGetters("weather", ["windCurrent"]),
    windDegree() {
      return `transform: rotate(${this.windCurrent.deg}deg);`;
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

.wind-degree {
  display: block;
  width: 40px;
  height: 40px;
  background-image: url("../assets/wind-degree.png");
  background-size: cover;
  border-radius: 50%;
}
</style>