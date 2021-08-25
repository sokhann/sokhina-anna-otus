import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/game",
      name: "game",
      component: GamePage
    }
  ]
});
