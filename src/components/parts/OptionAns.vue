<template>
  <div>
    <div
      class="opt"
      v-on:click="handleClick"
      v-bind:class="{ none: state === -1, wrong: state === false, correct: state === true}"
    >{{displayedText}}</div>
  </div>
</template>

<script>
import { eventHub } from "../../main.js";

export default {
  name: "OptionAns",
  props: ["word"],
  data() {
    return {
      displayedText: this.word.self,
      state: -1
    };
  },

  mounted() {
    const out = this;
    eventHub.$on("optClickedResponse", function(response) {
      if (response.component === out) {
        out.state = response.result;
        if (response.result === true) {
          const a = new Audio(require("../../assets/sounds/correct.wav"));
          a.play();
        } else if (response.result === false) {
          const a = new Audio(require("../../assets/sounds/wrong.wav"));
          a.play();
        }
      }
    });
  },
  methods: {
    handleClick: function() {
      this.$emit("optClicked", this);
    }
  }
};
</script>

<style scoped>
.opt {
  cursor: pointer;
  margin: 5px;
  transition: none;
  padding: 7px;
  text-align: center;
  border: 1px solid black;
}

.correct {
  background: seagreen;
}

.wrong {
  background: darkred;
}
</style>
