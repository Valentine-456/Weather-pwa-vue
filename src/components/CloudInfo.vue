<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Cloudiness</span>
      <span>15%</span>
    </div>
    <div class="information">
      <span class="heading">Visibility</span>
      <span class="wind-degree">5000m</span>
    </div>
    <div class="information">
      <span class="heading">Humidity</span>
      <span class="wind-degree">10%</span>
    </div>
    <div class="information">
      <span class="heading">Pressure</span>
      <span class="wind-degree">9</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CloudInfo"
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