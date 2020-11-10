<template>
  <div id="app">
    <Navigation />
    <Background />
    <Menu />
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import Background from "@/components/Background";

export default {
  data: () => ({
    transitionName: "slideDown"
  }),
  components: {
    Navigation,
    Background,
    Menu
  },
  watch: {
    $route(to, from) {
      const prevURL = from.path.split("/")[1];
      const nextURL = to.path.split("/")[1];

      if (nextURL === "current") this.transitionName = "slideUp";
      if (nextURL === "about") this.transitionName = "slideDown";
      if (nextURL === "forecast") {
        if (prevURL === "current") this.transitionName = "slideDown";
        if (prevURL === "about") this.transitionName = "slideUp";
      }
    }
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
  box-shadow: 0 0 5px #9accc8, 0 0 10px #9accc8, 0 0 15px #9accc8;
}

.slideUp-enter-active,
.slideDown-enter-active {
  transition: all 0.3s ease 0.2s;
}
.slideUp-leave-active,
.slideDown-leave-active {
  transition: all 0.3s ease;
}
.slideUp-enter,
.slideDown-leave-to {
  transform: translateY(-110vh);
}

.slideDown-enter,
.slideUp-leave-to {
  transform: translateY(110vh);
}
</style>
