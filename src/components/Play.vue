<template>
  <div id="play">
    <modal name="no-words">No words left!</modal>

    <div v-if="canPlay" id="play-layout">
      <question
        @questionResult="handleResult"
        v-bind:guess="currentGuess"
        v-bind:opts="currentOpts"
        v-bind:directive="directive"
      ></question>

      <div id="controls">
        <router-link :to="{name: 'Result', params: {records:record, canEdit:true} }">End</router-link>
        <router-link id="back" to="/game">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./parts/Question";

import { db } from "../main.js";

export default {
  name: "Play",

  props: ["tags", "diffs"],
  components: { Question },
  data() {
    return {
      allWords: [],
      wordsToPlay: [],

      currentGuess: null,
      currentOpts: null,
      gameLoop: null,

      directive: "None",
      canPlay: true,

      record: []
    };
  },

  mounted: async function() {
    const a = new Audio(require("../assets/sounds/gameenter.wav"));
    a.crossOrigin = "anonymous";
    a.setAttribute("media-player", "audioPlayer");
    console.log(a);

    a.play().then(e => console.log(e));

    this.allWords = await db.words.toArray();
  },

  watch: {
    allWords: function() {
      if (typeof this.allWords !== undefined && this.allWords.length !== 0) {
        this.wordsToPlay = this.allWords.filter(w => {
          return (
            (this.tags.length === 0 || this.tags.includes(w.tag)) && // chosen none => play all
            (this.diffs.length === 0 || this.diffs.includes(w.level)) // word fits the params
          );
        });
      }

      this.initGameLoop();
    }
  },

  methods: {
    initGameLoop: function() {
      this.gameLoop = setTimeout(this.playIteration, 200);
    },

    playIteration: function() {
      if (this.wordsToPlay.length === 0) {
        this.canPlay = false;
        this.$modal.show("no-words");

        setTimeout(() => {
          this.$router.push({
            name: "Result",
            params: { canEdit: true, records: this.record }
          });
          return;
        }, 1000);
      }
      this.currentGuess = this.wordsToPlay.popRandomEl();
      this.currentOpts = this.allWords.subArrayOfNExclusiveWith(
        3,
        this.currentGuess
      );
      this.directive = "render";

      // Start countdown with lil dellay
      setTimeout(() => {
        this.directive = "startTimer";
      }, 350);
    },

    handleResult: function(message) {
      this.record.push({
        word: this.currentGuess,
        result: message.result === "correct"
      });
      this.gameLoop = setTimeout(this.playIteration, 2000);
      console.log(this.record);
    },

    exit: function() {
      clearTimeout(this.gameLoop);
    }
  }
};
</script>

<style scoped>
#play {
  margin-top: 50px;
}
#controls {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#controls a {
  margin-top: 8px;
}

#controls #back {
  margin-top: 40px;
  margin-right: 30%;
}
</style>

