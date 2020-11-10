<template>
  <div id="forecast">
    <div class="forecast-wrap">
      <div v-for="(day, i) in dailyWeather" :key="i" class="forecast-item">
        <div class="info-title">
          <div>
            <span class="date">{{dailyWeatherDates[i][0]}}</span>
            <br />
            <span class="small">{{dailyWeatherDates[i][1]}}</span>
          </div>

          <div>
            <span class="temp">{{day.temp.temp.split('/')[0]}}°C</span>
            <br />
            <span class="weather">{{day.weather.main}}</span>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("weather", ["dailyWeather"]),
    dailyWeatherDates() {
      const times = this.dailyWeather.map(item => item.location.date);

      const dates = times.map(time => {
        const year = new Date(+time).getUTCFullYear();
        let month = new Date(+time).getUTCMonth() + 1;
        let date = new Date(+time).getUTCDate();
        if (month < 10) month = `0${month}`;
        if (date < 10) date = `0${date}`;

        const day = new Date(+time).getUTCDay();
        let dayTitle;
        if (day === 0) dayTitle = "Sunday";
        if (day === 1) dayTitle = "Monday";
        if (day === 2) dayTitle = "Tuesday";
        if (day === 3) dayTitle = "Wednesday";
        if (day === 4) dayTitle = "Thursday";
        if (day === 5) dayTitle = "Friday";
        if (day === 6) dayTitle = "Saturday";

        return [dayTitle, `${date}/${month}/${year}`];
      });
      return dates;
    }
  }
};
</script>
<style scoped>
#forecast {
  margin-top: 2vh;
  height: 88vh;
}

.forecast-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.forecast-item {
  width: 100%;
  height: 12%;
}

.info-title {
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  font-weight: 300;
}

.info-title div:first-of-type {
  text-align: left;
}

.info-title div:last-of-type {
  text-align: right;
}

span.date {
  font-size: 1.1em;
}

span.small {
  opacity: 0.7;
}

span.weather {
  opacity: 0.7;
}

span.temp {
  font-size: 1.1em;
}

.divider {
  height: 2px;
  width: 90%;
  border-radius: 2px;
  background-color: white;
  margin: 5px auto;
}
</style>