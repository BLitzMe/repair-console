import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Aufträge",
    component: () => import(/* webpackChunkName: "about" */ "../views/aufträge-tabelle.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL + "repair-console/",
  routes
});

export default router;
