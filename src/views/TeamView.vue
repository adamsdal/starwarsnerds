<template>
  <div class="teamselect">
    <h1>This is a team viewing page</h1>
    <p v-if="noTeamMembers">No team members have been chosen.</p>
    <p v-if="noPlanetChosen">No planet has been chosen.</p>
    <p v-if="noShipChosen">No ship has been chosen.</p>
    <div class="wrapper">
      <div class="people">
        <div class="person" v-for="person in team" :key="person.id">
          <div class="info">
          <h1>{{person.name}}</h1>
          <p>Power: {{person.power}}</p>
          <p>Health: {{person.health}}</p>
        </div>
        <div class="image">
          <img :src="person.picture">
        </div>
        <div class="stats">
          <button @click="removeFromTeam(person.id)" class="center">Remove From Team</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamView",
  methods: {
    removeFromTeam(personID) {
      this.$root.$data.team = this.$root.$data.team.filter(person => {
        return person.id === personID ? false : true;
      });
    },
    removePlanet() {
      this.$root.$data.planet = null;
    },
    removeShip() {
      this.$root.$data.ship = null;
    }
  },
  computed: {
    team() {
      return this.$root.$data.team;
    },
    planet() {
      return this.$root.$data.planet;
    },
    ship() {
      return this.$root.$data.ship;
    },
    noTeamMembers() {
      return this.$root.$data.team.length === 0;
    },
    noPlanetChosen() {
      return !this.$root.$data.planet;
    },
    noShipChosen() {
      return !this.$root.$data.ship;
    },
    gameState() { 
      let gameStateArray = [];
      this.team.forEach(member => gameStateArray.push(member));
      if (this.planet) {
        gameStateArray.push(this.planet);
      }
      if (this.ship) {
        gameStateArray.push(this.ship);
      }
      return gameStateArray;
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

.people {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.person {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.person img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.person .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #1df252;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info-planet {
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