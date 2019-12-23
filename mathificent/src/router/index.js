import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Game from '../components/Game.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/play', name: 'play', component: Game }];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
