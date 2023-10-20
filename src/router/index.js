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
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
