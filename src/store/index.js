import Vue from "vue";
import Vuex from "vuex";
import weather from "./weather";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { weather },
});

store.dispatch("initWeather", "kyiv");

export default store;
