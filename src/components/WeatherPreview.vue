<template>
  <div>
    <h1 class="temperature-title">{{tempCurrent.temp}}°C</h1>
    <h3 class="city-title">{{weatherCurrent.main}}, {{locationCurrent.cityName}}</h3>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "WeatherPreview",
  computed: {
    ...mapGetters("weather", [
      "weatherCurrent",
      "tempCurrent",
      "locationCurrent"
    ])
  }
};
</script>
<style scoped>
h1.temperature-title {
  font-weight: 300;
  font-size: 3.2em;
  line-height: 100%;
}

h3.city-title {
  font-weight: 300;
  font-size: 1.4em;
  line-height: 100%;
}
</style>