<template>
<div class="wrapper">
  <div class="people">
    <div class="person" v-for="person in people" :key="person.id">
      <div class="info">
        <h1>{{person.name}}</h1>
        <p>Power: {{person.power}}</p>
        <p>Health: {{person.health}}</p>
      </div>
      <div class="image">
        <img :src="person.picture">
      </div>
      <div class="stats">
        <button @click="addToTeam(person)" class="center">Add to Team</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'PeopleList',
    computed: {
        people() {
            return this.$root.$data.people;
        }
    },
    methods: {
        addToTeam(person) {
            this.$root.$data.team.push(person);
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