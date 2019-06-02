<template>
  <div class="dict">
    <diff-picker @changed="updateDiffs"></diff-picker>
    <tag-picker @changed="updateTags"></tag-picker>
    <word-list v-bind:words="words"></word-list>

    <router-link to="/home">Back</router-link>
  </div>
</template>

<script>
import DiffPicker from "./parts/DiffPicker";
import TagPicker from "./parts/TagPicker";
import WordList from "./parts/WordList";

import {db} from "../main.js"

export default {
  components: { DiffPicker, WordList, TagPicker },
  name: "Dict",
  created: async function() {
    this.allWords = await db.words.toArray();
    this.words = this.allWords;
  },
  data() {
    return {
      allWords: [],
      words: []
    };
  },
  methods: {
    updateDiffs: function(chosenDiffs) {
      console.log(chosenDiffs);
      this.words = this.allWords.filter(w => {
        return chosenDiffs.length === 0 || chosenDiffs.includes(w.level);
      });
    },

    updateTags: function(chosenTags) {
      console.log(chosenTags);
      this.words = this.allWords.filter(w => {
        return chosenTags.length === 0 || chosenTags.includes(w.tag);
      });
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

.dict {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: #42b983;
}
</style>
