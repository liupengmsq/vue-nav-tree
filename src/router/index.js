import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/navtree',
    name: 'navTree',
    component: () => import(/* webpackChunkName: "navtree" */ '../views/nav/NavTreeView.vue')
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: () => import(/* webpackChunkName: "markdown" */ '../views/wiki/MarkdownEditorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
