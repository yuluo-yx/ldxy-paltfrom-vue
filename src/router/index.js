import { createRouter, createWebHistory } from 'vue-router'
import {TabbarData} from "../untils/TabBar"
import {otherData} from "../untils/otherRouter"

const routes = [
  {
    path:"/",
    redirect: "/home"
  },
]

TabbarData.forEach(e => {
  routes.push({
    path: e.path,
    name: e.name,
    component: () => import("../views"+e.component)
  })
});

otherData.forEach(e => {
  routes.push({
    path: e.path,
    name: e.name,
    component: () => import("../views"+e.component)
  })
})


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
