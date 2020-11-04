<template>
  <div class="flex">
    <div class="information">
      <span class="heading">Speed</span>
      <span>36 km/h</span>
    </div>
    <div class="information">
      <span class="heading">Degree</span>
      <span class="wind-degree"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "WindInfo"
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