<template>
  <nav id="navigation">
    <div class="nav-button">
      <div class="dash"></div>
      <div class="dash dash-shortened"></div>
      <div class="dash"></div>
    </div>
    <div @mouseleave="cityNameActive = false" class="nav-button">
      <div @click="openSearchBar" class="search"></div>
      <input
        id="cityName"
        v-model="cityName"
        type="text"
        class="city-name"
        @change="getWeather(cityName)"
        :class="{'city-name-active': cityNameActive}"
      />
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  data: () => ({
    cityNameActive: false,
    cityName: ""
  }),
  methods: {
    getWeather(cityName) {
      this.$store.dispatch("initWeather", cityName);
      this.cityName = "";
    },
    openSearchBar() {
      this.cityNameActive = !this.cityNameActive;
      document.getElementById("cityName").focus();
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#navigation {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
}

.nav-button {
  height: 6vh;
  width: 6vh;
  position: relative;
}

.nav-button .dash {
  position: absolute;
  left: 0;
  top: 20%;
  width: 90%;
  border-radius: 5px;
  height: 12%;
  background: white;
}

.nav-button .dash-shortened {
  top: 50%;
  width: 70%;
}

.nav-button .dash:nth-of-type(3) {
  top: 80%;
}

.nav-button .search {
  position: absolute;
  width: 6vh;
  height: 6vh;
  right: 0;
  top: 0;
  background-image: url("../assets/search.png");
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
  z-index: 10;
}

.nav-button .city-name {
  padding-right: 100%;
  padding-left: 5px;
  height: 100%;
  width: 70vw;
  max-width: 370px;
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border-radius: 15px;
  border: none;
  background-color: rgba(50, 50, 50, 0.4);
  color: white;
  font-size: 1.5em;
  transition: clip-path 0.5s;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}

.nav-button .city-name:focus {
  outline: none;
}

.nav-button .city-name-active {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>