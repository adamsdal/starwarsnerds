<template>
  <div class="teamselect">
    <h1>This is a team viewing page</h1>
    <p v-if="noTeamMembers">No team members have been chosen.</p>
    <p v-if="noPlanetChosen">No planet has been chosen.</p>
    <p v-if="noShipChosen">No ship has been chosen.</p>

  </div>
</template>

<script>
export default {
  name: "TeamView",
  methods: {
    removeFromPeople(personID) {
      this.$root.$data.people = this.$root.$data.people.filter(person => {
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
    people() {
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
    }
  }
}
</script>