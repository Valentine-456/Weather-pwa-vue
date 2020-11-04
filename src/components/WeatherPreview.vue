<template>
  <div>
    <h2 class="weather-main-title">Clear</h2>
    <h3 class="city-title">Egypt</h3>
    <h1 class="temperature-title">27°C</h1>
  </div>
</template>
<script>
export default {
  name: "WeatherPreview"
};
</script>
<style scoped>
h1.temperature-title {
  margin-top: 1.5vh;
  font-weight: normal;
  font-size: 3.2em;
}

h2.weather-main-title {
  font-weight: normal;
  font-size: 2.3em;
}

h3.city-title {
  font-weight: normal;
  font-size: 1.4em;
}
</style>