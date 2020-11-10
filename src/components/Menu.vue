<template>
  <div id="menu" @mouseleave="CLOSE_MENU" :class="menuClass">
    <router-link class="menu-link" to="/current"></router-link>
    <router-link class="menu-link" to="/forecast"></router-link>
    <router-link class="menu-link" to="/about"></router-link>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapState("menu", ["isOpened"]),
    menuClass() {
      if (this.isOpened) return "menuOpened";
      return "";
    }
  },
  methods: {
    ...mapMutations("menu", ["CLOSE_MENU"])
  }
};
</script>
<style scoped>
#menu {
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: 20%;
  background: rgba(255, 255, 255, 1);
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #313131;
  transition: transform 0.3s;
}

.menuOpened {
  transform: translateX(100%);
}

.menu-link {
  display: block;
  width: 60px;
  height: 60px;
  /* background-color: red; */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
}

.menu-link:first-of-type {
  background-image: url("../assets/current.png");
}
.menu-link:nth-of-type(2) {
  background-image: url("../assets/forecast.png");
}
.menu-link:last-of-type {
  background-image: url("../assets/about.png");
}
</style>