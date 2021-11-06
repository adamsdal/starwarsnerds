<template>
<div class="wrapper">
  <div class="planets">
    <div class="planet" v-for="planet in planets" :key="planet.id">
      <div class="info">
        <h1>{{planet.name}}</h1>
        <p>Resources: {{planet.resources}}</p>
        <p>Danger: {{planet.danger}}</p>
      </div>
      <div class="image">
        <img :src="planet.picture">
      </div>
      <div class="stats">
        <button @click="select(planet)" class="center">Select Planet</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'PlanetsList',
    computed: {
        planets() {
            return this.$root.$data.planets;
        }
    },
    methods: {
        select(planet) {
            this.$root.$data.planet = planet;
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

.planets {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.planet {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.planet img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.planet .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #1d80f2;
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