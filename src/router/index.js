import Vue from "vue";
import VueRouter from "vue-router";
import Current from "../views/Current.vue";
import DailyForecast from "../views/DailyForecast.vue";
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
    path: "/daily-forecast",
    name: "DailyForecast",
    component: DailyForecast,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
