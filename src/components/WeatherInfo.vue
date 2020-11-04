<template>
  <div class>
    <div class="info-title">
      <span class="date">Monday</span>
      <div class="icons">
        <router-link to="/current/temp">
          <div class="icon icon-temp"></div>
        </router-link>
        <router-link to="/current/clouds">
          <div class="icon icon-clouds"></div>
        </router-link>
        <router-link to="/current/wind">
          <div class="icon icon-wind"></div>
        </router-link>
      </div>
    </div>
    <div class="divider"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "WeatherInfo"
};
</script>
<style scoped>
.info-title {
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
}

.icons {
  display: flex;
  justify-content: center;
}

.icon {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  background-size: contain;
  background-repeat: no-repeat;
}

.icon-temp {
  background-image: url("../assets/temp.png");
}

.icon-clouds {
  background-image: url("../assets/cloud.png");
}

.icon-wind {
  background-image: url("../assets/wind.png");
}

.divider {
  height: 2px;
  width: 90%;
  border-radius: 2px;
  background-color: white;
  margin: 5px auto;
}

.container {
  width: 90%;
  margin: 5px auto;
}
</style>