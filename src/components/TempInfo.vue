<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Temp</span>
      <span>27°C</span>
    </div>
    <div class="information">
      <span class="heading">Feels like</span>
      <span class="wind-degree">33°C</span>
    </div>
    <div class="information">
      <span class="heading">Sunrise</span>
      <span class="wind-degree">05.40</span>
    </div>
    <div class="information">
      <span class="heading">Sunset</span>
      <span class="wind-degree">19.49</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TempInfo"
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