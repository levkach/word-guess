<template>
  <div class="home">
    <h1>{{ "Word Game" }}</h1>
    <h2>{{ "Classical word quiz game" }}</h2>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/dict">Dictionary</router-link>
      <router-link to="/records">Records</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      allWords: []
    };
  },

  created: function() {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: column;
}
</style>
