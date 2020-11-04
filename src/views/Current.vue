<template>
  <div id="current">
    <WeatherPreview />
    <WeatherInfo />
  </div>
</template>

<script>
import WeatherPreview from "@/components/WeatherPreview";
import WeatherInfo from "@/components/WeatherInfo";

export default {
  name: "Home",
  components: {
    WeatherInfo,
    WeatherPreview
  }
};
</script>
<style scoped>
#current {
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86vh;
}
</style>