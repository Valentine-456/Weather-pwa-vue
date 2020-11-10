<template>
  <div id="about">
    <h1>FAQ</h1>
    <section class="question">
      <h2>About this app:</h2>
      <span
        class="answer"
      >This is a weather PWA (Progressive Web App) build with Vue.js, powered by OpenWeatherMap API.</span>
    </section>
    <section class="question">
      <h2>Functions:</h2>
      <span class="answer">
        The app provides you with the current weather and the 7 days forecast (today and the next week).
        When you open the app, it will try to find weather according to your geolocation. After you can search weather in Cities and by coordinates.
        Open the search bar and enter city name. Or you can type coordinates {latitude;longitude}.
      </span>
    </section>
    <section class="question">
      <h2>Creator:</h2>
      <span class="answer">
        Valetyn Bondarenko.
        <br />Github:
        <a href="https://github.com/Valentine-456">Valentine-456</a>
      </span>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  font-weight: 300;
  color: white;
}

#about {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 2vh;
}

section.question {
  text-align: left;
  width: 90%;
  margin: 5%;
  background-color: rgba(50, 50, 50, 0.6);
  border-radius: 10px;
  padding: 5px;
}

section.question h2 {
  text-align: left;
  margin-left: 5%;
}

section.question span.answer {
  font-size: 1em;
}
</style>