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

import { db } from "../main.js";

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
      words: [],
      currentDiffs: [],
      currentTags: []
    };
  },
  methods: {
    updateDiffs: function(chosenDiffs) {
      this.currentDiffs = chosenDiffs;
      this.updateWords();
    },

    updateTags: function(chosenTags) {
      this.currentTags = chosenTags;
      this.updateWords();
    },

    updateWords: function() {
      this.words = this.allWords.filter(w => {
        return (
          (this.currentDiffs.length === 0 ||
            this.currentDiffs.includes(w.level)) &&
          (this.currentTags.length === 0 || this.currentTags.includes(w.tag))
        );
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
