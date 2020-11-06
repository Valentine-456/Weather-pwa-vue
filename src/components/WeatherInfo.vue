<template>
  <div class>
    <div class="info-title">
      <span class="date">{{currentTime}}</span>
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
    <div class="container">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";

export default {
  name: "WeatherInfo",
  data: () => ({
    transitionName: "slide-left"
  }),
  computed: {
    locationCurrent() {
      return this.$store.getters["weather/locationCurrent"];
    },
    currentTime() {
      // return `${new Date(+this.locationCurrent.time).getUTCHours()}:${new Date(
      //   +this.locationCurrent.time
      // ).getUTCMinutes()}`;

      let hours = new Date(+this.locationCurrent.time).getUTCHours();
      if (hours < 10) hours = `0${hours}`;
      let minutes = new Date(+this.locationCurrent.time).getUTCMinutes();
      if (minutes < 10) minutes = `0${minutes}`;
      return `${hours}:${minutes}`;
    }
  },
  watch: {
    $route(to, from) {
      const nextURL = to.path.split("/")[to.path.split("/").length - 1];
      const prevURL = from.path.split("/")[from.path.split("/").length - 1];

      if (nextURL === "wind") {
        this.transitionName = "slide-left";
      }
      if (nextURL === "temp") {
        this.transitionName = "slide-right";
      }
      if (nextURL === "clouds") {
        this.transitionName = prevURL === "temp" ? "slide-left" : "slide-right";
      }
      // this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
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
  height: 17vh;
  overflow: hidden;
}

.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.3s ease 0.1s;
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>