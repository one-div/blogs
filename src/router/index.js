import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeMain/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // 游戏
  {
    path:"/game",
    component:() =>  import("@/views/htmlGame/Game.vue"),
    children:[
      {path: '/game', redirect: '/game/PlaneWars'},
      // 飞机大战
      {
        path:"/game/PlaneWars",
        component: () => import("@/views/htmlGame/PlaneWars.vue"),
      },
      // 塔防
      {
        path:"/game/TowerDefence",
        component: () => import("@/views/htmlGame/TowerDefence.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
