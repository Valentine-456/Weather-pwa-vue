import Vue from "vue";
import VueRouter from "vue-router";
import Current from "../views/Current.vue";
import Forecast from "../views/Forecast.vue";
import About from "../views/About.vue";
import TempInfo from "@/components/TempInfo";
import WindInfo from "@/components/WindInfo";
import CloudInfo from "@/components/CloudInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/current",
  },
  {
    path: "/current/",
    name: "Current",
    redirect: "/current/temp",
    component: Current,
    children: [
      {
        path: "temp",
        component: TempInfo,
      },
      {
        path: "wind",
        component: WindInfo,
      },
      {
        path: "clouds",
        component: CloudInfo,
      },
    ],
  },
  {
    path: "/forecast",
    name: "Forecast",
    component: Forecast,
  },
  { path: "/about", name: "About", component: About },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
