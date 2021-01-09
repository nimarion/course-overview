import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Übersicht",
      path: "/",
      component: () => import("@/page/Overview")
    }
  ]
});

export default router;
