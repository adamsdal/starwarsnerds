<template>
  <div class="teamselect">
    <h1 class="text-4xl pb-8">View your Team!</h1>
	<div class="teamDisplay">
		<h1 class="teamSection">Team Members:</h1>
		<div v-if="noTeamMembers">
			<img src="https://st.depositphotos.com/2142621/2870/i/600/depositphotos_28708655-stock-photo-oh-no.jpg">
			<p class="py-4 text-xl text-red-500">OH NO! You haven't selected any team members!</p>
		</div>
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
		<h1 class="teamSection">Ship Chosen:</h1>
		<div v-if="noShipChosen">
			<img src="https://st.depositphotos.com/2142621/2870/i/600/depositphotos_28708655-stock-photo-oh-no.jpg">
			<p class="py-4 text-xl text-red-500">Failure! You haven't selected a freaking ship!</p>
		</div>
		<div class="wrapper">
			<div class="person" v-if="!noShipChosen">
				<div class="shipInfo">
					<h1 class="text-lg">{{ship.name}}</h1>
					<p class="shipP">Health: {{ship.health}}</p>
					<p class="shipP">Damage: {{ship.damage}}</p>
					<p class="shipP">Mobility: {{ship.mobility}}</p>
				</div>
				<div class="image">
					<img :src="ship.picture">
				</div>
				<div class="stats">
					<button @click="removeShip()" class="center">Remove Ship</button>
				</div>
			</div>
		</div>
		<h1 class="teamSection">Planet Selected:</h1>
		<div v-if="noPlanetChosen">
			<img src="https://st.depositphotos.com/2142621/2870/i/600/depositphotos_28708655-stock-photo-oh-no.jpg">
			<p class="py-4 text-xl text-red-500">Noooo! You haven't selected a planet you BOZO!</p>
		</div>
		<div class="wrapper">
			<div class="person" v-if="!noPlanetChosen">
				<div class="info-planet">
					<h1 class="text-lg">{{planet.name}}</h1>
					<p class="shipP">Resources: {{planet.resources}}</p>
					<p class="shipP">Danger: {{planet.danger}}</p>
				</div>
				<div class="image">
					<img :src="planet.picture">
				</div>
				<div class="stats">
					<button @click="removePlanet()" class="center">Remove Planet</button>
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

.teamSection {
	font-size: 30px;
	padding-bottom: 15px;
}

.teamDisplay {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shipP {
	font-size: 10px;
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

.shipInfo {
	background: #f21d1d;
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