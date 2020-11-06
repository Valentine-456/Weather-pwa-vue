<template>
  <div class="background" :class="time()[0]">
    <div class="mountain" :class="time()[1]"></div>
    <div class="stars" :class="time()[2]"></div>
    <div class="sun" :class="time()[3]"></div>
    <div class="moon" :class="time()[4]"></div>
    <!-- <div class="cloud1" :style="clouds1Style"></div>
    <div class="cloud2"></div>-->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Background",
  data: () => ({
    timeNow: "night"
  }),
  computed: {
    ...mapGetters("weather", [
      "tempCurrent",
      "locationCurrent",
      "weatherCurrent"
    ])
    // clouds1Style() {
    //   const weatherCode = this.weatherCurrent.id;
    //   if (weatherCode >= 800) {
    //     const remainder = weatherCode % 800;
    //     if (remainder === 0) return "transform: translateX(-100%)";
    //     if (remainder === 1) return "transform: translateX(-75%)";
    //     if (remainder === 2) return "transform: translateX(-50%)";
    //     if (remainder === 3) return "transform: translateX(-25%)";
    //     if (remainder === 4) return "transform: translateX(-10%)";
    //   }
    //   return "transform: translateX(-100%)";
    // }
  },
  methods: {
    time() {
      const currentTime = +this.locationCurrent.time;
      const dusk = +this.tempCurrent.sunset;
      const dawn = +this.tempCurrent.sunrise;
      let timeNow = "night";

      if (currentTime >= dawn && new Date(currentTime).getUTCHours() < 10) {
        timeNow = "morning";
      }
      if (new Date(currentTime).getUTCHours() >= 10 && currentTime < dusk) {
        timeNow = "day";
      }
      if (currentTime >= dusk && new Date(currentTime).getUTCHours() < 23) {
        timeNow = "evening";
      }
      // if (
      //   (new Date(currentTime).getUTCHours() >= 23 ||
      //     new Date(currentTime).getUTCHours() >= 0) &&
      //   new Date(currentTime).getUTCHours() < 6
      // ) {
      //   timeNow = "night";
      // }
      return [
        `background-${timeNow}`,
        `mountain-${timeNow}`,
        `stars-${timeNow}`,
        `sun-${timeNow}`,
        `moon-${timeNow}`
      ];
    }
  }
};
</script>
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  transition: all 0.9s;
}

.background-day {
  background-image: linear-gradient(#82c5c9, #e8e5b2 80%);
}
.background-night {
  background-image: linear-gradient(#200e3b, #313164 80%);
}
.background-morning {
  background-image: linear-gradient(#88647c, #e39cab 80%);
}
.background-evening {
  background-image: linear-gradient(#302662, #75bbd5 80%);
}

.mountain {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -90;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}

.mountain-day {
  background-image: url("../assets/mountain-day.png");
}
.mountain-morning {
  background-image: url("../assets/mountain-morning.png");
}
.mountain-evening {
  background-image: url("../assets/mountain-evening-night.png");
}
.mountain-night {
  background-image: url("../assets/mountain-evening-night.png");
}

.sun {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%) scale(1.5);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -95;
  transition: 0.9s;
}

.sun-day {
  background-image: url("../assets/sun-day.png");
}
.sun-morning {
  background-image: url("../assets/sun-morning.png");
  transform: translate(-50%, 100%) scale(2);
}
.sun-night {
  transform: translate(-50%, 80vh) scale(1.5);
}
.sun-evening {
  transform: translate(-50%, 80vh) scale(1.5);
}

.moon {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%) scale(2);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -95;
  transition: all 0.9s;
}

.moon-day {
  transform: translateY(100%) translateY(80vh);
}
.moon-morning {
  transform: translateY(100%) translateY(80vh);
}
.moon-night {
  background-image: url("../assets/moon.png");
}
.moon-evening {
  background-image: url("../assets/moon.png");
  transform: translate(-50%, -50%) translateY(100%) scale(1.5);
}

.stars {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: 0 10%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/stars.png");
  opacity: 0;
  transition: opacity 0.5s;
}

.stars-night {
  opacity: 1;
}
/* 
.cloud1,
.cloud2 {
  position: absolute;
  top: 35%;
  width: 80%;
  height: 20%;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -80;
  transition: all 0.9s;
}

.cloud1 {
  left: 0;
  background-image: url("../assets/weather-cloud1.png");
}

.cloud2 {
  right: 0;
  background-image: url("../assets/weather-cloud2.png");
} */
</style>