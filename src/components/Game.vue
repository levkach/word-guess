<template>
  <div class="game">
    <h2>{{ "Choose game settings" }}</h2>
    <diff-picker @changed="handleChangedDiffs" v-bind:randomize="shuffle"></diff-picker>
    <tag-picker @changed="handleChangedTags" v-bind:randomize="shuffle"></tag-picker>
    <section id="controls">
      <router-link to="/home">Back</router-link>
      <a v-on:click="randomize" id="randomize">Shuffle</a>
      <router-link
        v-bind:tags="selectedTags"
        v-bind:diffs="selectedDiffs"
        :to="{name: 'Play', params:{tags: selectedTags, diffs: selectedDiffs}}"
      >Play</router-link>
    </section>
  </div>
</template>

<script>
import DiffPicker from "./parts/DiffPicker";
import TagPicker from "./parts/TagPicker";

export default {
  name: "Game",
  components: { DiffPicker, TagPicker },
  data() {
    return {
      shuffle: false,
      selectedTags: [],
      selectedDiffs: []
    };
  },
  methods: {
    randomize: function() {
      this.shuffle = !this.shuffle;
    },
    handleChangedDiffs: function(selected) {
      this.selectedDiffs = selected;
    },

    handleChangedTags: function(selected) {
      this.selectedTags = selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#controls {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

a {
  color: #42b983;
  cursor: pointer;
}
</style>
