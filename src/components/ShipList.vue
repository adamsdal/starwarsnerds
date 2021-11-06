<template>
<div class="wrapper">
  <div class="ships">
    <div class="ship" v-for="ship in ships" :key="ship.id">
      <div class="info">
        <h1>{{ship.name}}</h1>
        <p>Health: {{ship.health}}</p>
        <p>Damage: {{ship.damage}}</p>
        <p>Mobility: {{ship.mobility}}</p>
      </div>
      <div class="image">
        <img :src="ship.picture">
      </div>
      <div class="stats">
        <button @click="select(ship)" class="center">Select Ship</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'shipsList',
    computed: {
        ships() {
            return this.$root.$data.ships;
        }
    },
    methods: {
        select(ship) {
            this.$root.$data.ship = ship;
        }
    }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ships {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.ship {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.ship img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.ship .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f21d1d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.stats {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.center {
  margin: auto;
}
</style>