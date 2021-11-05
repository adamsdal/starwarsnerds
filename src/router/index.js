import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TeamSelect from '../views/TeamSelect.vue'
import TeamView from '../views/TeamView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teamselect',
    name: 'TeamSelect',
    component: TeamSelect
  },
  {
    path: '/teamview',
    name: 'TeamView',
    component: TeamView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
