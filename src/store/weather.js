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
    SET_DAILY(state, data) {
      const value = data.daily.map((day) => ({
        wind: {
          deg: day.wind_deg,
          speed: Math.round(day.wind_speed),
        },
        clouds: {
          humidity: day.humidity,
          cloudiness: day.clouds,
          visibility: "",
          pressure: day.pressure,
        },
        temp: {
          temp: `${Math.round(day.temp.day)}/${Math.round(day.temp.night)}`,
          feelsLike: `${Math.round(day.feels_like.day)}/${Math.round(
            day.feels_like.night
          )}`,
          sunset: `${(day.sunset + data.timezone_offset) * 1000}`,
          sunrise: `${(day.sunrise + data.timezone_offset) * 1000}`,
        },
        weather: day.weather[0],
        location: {
          cityName: state.currentWeather.location.cityName,
          time: `${Date.now() + data.timezone_offset * 1000}`,
          date: `${(day.dt + data.timezone_offset) * 1000}`,
        },
      }));
      state.dailyWeather = value;
    },
  },
  actions: {
    initWeather: {
      handler: async function({ dispatch }, cityName) {
        await dispatch("fetchCurrentWeather", cityName);
        await dispatch("fetchDailyForecast");
      },
      root: true,
    },
    async fetchCurrentWeather({ commit }, search) {
      try {
        let response;
        //Serach by city name
        if (typeof search === "string") {
          response = await fetch(
            //!!! API KEY
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=token&units=metric` //!!!
            //!!! API KEY
          );
        }
        //Search by coords
        if (typeof search === "object") {
          response = await fetch(
            //!!! API KEY
            `https://api.openweathermap.org/data/2.5/weather?lat=${search.lat}&lon=${search.lon}&appid=token&units=metric` //!!!
            //!!! API KEY
          );
        }
        const data = await response.json();

        commit("SET_CURRENT", data);
      } catch (e) {
        console.log(e);
        navigator.vibrate(200);
      }
    },
    async fetchDailyForecast({ commit, state }) {
      const lat = state.currentWeather.location.coord.lat;
      const lon = state.currentWeather.location.coord.lon;
      //!!! API KEY
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current,alerts&appid=token&units=metric` //!!!
      );
      //!!! API KEY
      const data = await response.json();
      commit("SET_DAILY", data);
    },
  },
};

export default weatherStore;
