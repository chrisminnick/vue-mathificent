import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Game from '../components/Game.vue'

Vue.use(VueRouter)

let stateData = {
  operations: ['+','x','/','-'],
  currentOperation:'x',
  maxNumber:3
}

const routes = [
  { path: '/',   
    data: stateData,
    name: 'home', 
    component: Main },
  { path: '/play',     
    data: stateData,
    name: 'play', 
    component: Game }];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
