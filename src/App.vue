<template>
  <div id="app">
    <Navigation />
    <Background />
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import Background from "@/components/Background";

export default {
  components: {
    Navigation,
    Background,
    Menu
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300;400;700&display=swap");

* {
  padding: 0;
  margin: 0;
}

::selection {
  background: transparent;
  color: white;
}

#app {
  font-family: Arima Madurai, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
