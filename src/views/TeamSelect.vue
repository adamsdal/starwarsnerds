<template>
  <div class="teamselect">
    <h1>This is a team selecting page</h1>
    <PeopleList/>
    <PlanetList/>
    <ShipList/>
  </div>
</template>

<script>
import PeopleList from "../components/PeopleList.vue"
import PlanetList from "../components/PlanetList.vue"
import ShipList from "../components/ShipList.vue"
export default {
  name: 'TeamSelect',
  components: {
    PeopleList,
    PlanetList,
    ShipList
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
