import Vue from "vue";
import Vuex from "vuex";
import weather from "./weather";
import menu from "./menu";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { weather, menu },
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      store.dispatch("initWeather", {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    },
    () => store.dispatch("initWeather", "Lviv")
  );
}

export default store;
