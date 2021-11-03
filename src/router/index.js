
import { createRouter, createWebHashHistory } from "vue-router"
import { routes } from './config'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})