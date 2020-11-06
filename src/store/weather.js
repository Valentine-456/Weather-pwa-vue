const weatherStore = {
  namespaced: "true",
  state: {
    currentWeather: {
      weather: {},
      temp: {},
      wind: {},
      clouds: {},
      location: {
        time: "1604650350693",
      },
    },
    dailyWeather: [],
  },
  getters: {
    weatherCurrent: ({ currentWeather }) => currentWeather.weather,
    tempCurrent: ({ currentWeather }) => currentWeather.temp,
    windCurrent: ({ currentWeather }) => currentWeather.wind,
    cloudsCurrent: ({ currentWeather }) => currentWeather.clouds,
    locationCurrent: ({ currentWeather }) => currentWeather.location,
  },
  mutations: {
    SET_CURRENT(state, data) {
      const location = {
        coord: data.coord,
        cityName: data.name,
        time: `${Date.now() + data.timezone * 1000}`,
      };
      const clouds = {
        cloudiness: data.clouds.all,
        visibility: data.visibility,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
      };
      const temp = {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        sunset: `${(data.sys.sunset + data.timezone) * 1000}`,
        sunrise: `${(data.sys.sunrise + data.timezone) * 1000}`,
      };
      const wind = {
        deg: data.wind.deg,
        speed: Math.round(data.wind.speed),
      };
      const weather = data.weather[0];
      //
      state.currentWeather = { weather, wind, temp, clouds, location };
    },
    SET_DAILY(state, value) {
      state.dailyWeather = value;
    },
  },
  actions: {
    initWeather: {
      handler: async function({ dispatch }, cityName) {
        await dispatch("fetchCurrentWeather", cityName);
      },
      root: true,
    },
    async fetchCurrentWeather({ commit }, cityName) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Token}&units=metric`
      );
      const data = await response.json();

      commit("SET_CURRENT", data);
    },
    // async fetchDailyForecast({ commit }, coords) {},
  },
};

export default weatherStore;
