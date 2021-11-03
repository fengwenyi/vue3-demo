export const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/todo-list', component: () => import('../views/TodoList.vue') },
  { path: '/calculator', component: () => import('../views/Calculator.vue') },
]