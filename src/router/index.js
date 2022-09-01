import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routes = [

  {
    path: "/index",
    name: "index",
    component: () => import("../views/Pages/IndexPages.vue"),
    meta: {
      title: "首页"
    }
  },

  {
    path: "/",
    redirect:"/index"
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
