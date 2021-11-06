import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockPeople from './mock-people.js'
import mockPlanets from './mock-planets.js'
import mockShips from './mock-ships.js'

Vue.config.productionTip = false

let data = {
  people: mockPeople,
  planets: mockPlanets,
  ships: mockShips,
  team: [],
  planet: null,
  ship: null
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
