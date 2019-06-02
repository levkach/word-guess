<template>
  <div id="question">
    <h2 id="guess">{{answer}}</h2>
    <p>{{watchedGuess}}</p>
    <timer id="timer" v-bind:directive="controlDirective" @timer="controlTimer"></timer>
    <div id="opts">
      <option-ans
        @optClicked="handleClick"
        v-for="opt in watchedOpts"
        v-bind:word="opt"
        :key="opt.self"
      ></option-ans>
    </div>
  </div>
</template>

<script>
import Timer from "./Timer";
import OptionAns from "./OptionAns";
import { eventHub } from "../../main.js";

export default {
  name: "Question",
  props: ["opts", "guess", "directive"],
  components: { Timer, OptionAns },
  data() {
    return {
      watchedGuess: "",
      watchedOpts: [],
      controlDirective: "None",
      answered: false,
      answer: "",
      givenAnswer: "",
      lastClickedOption: null
    };
  },

  watch: {
    // Directive is recieved from Play component
    directive: function() {
      switch (this.directive) {
        case "render":
          // clear before next question
          this.resetParams();

          this.watchedGuess = this.guess.definition;

          // put guess in a random position
          this.watchedOpts = [...this.opts];
          this.watchedOpts.insert(Math.floor(Math.random() * 4), this.guess);

          console.log(this.watchedOpts);

          break;

        // start timer
        case "startTimer":
          this.controlDirective = "start";
          break;
      }
    }
  },

  methods: {
    // Recieves messages from timer
    controlTimer: function(message) {
      if (message === "timeout") {
        this.controlDirective = "stop";

        this.$emit("questionResult", { result: "timeout" });
      }
    },

    // handle clicked option as given answer
    handleClick: function(clickedComponent) {
      // control double clicks
      if (!this.answered) {
        this.answered = true;
        this.lastClickedOption = clickedComponent;
        this.givenAnswer = clickedComponent.word.self;

        let res = this.givenAnswer === this.guess.self;

        eventHub.$emit("optClickedResponse", {
          result: res,
          component: clickedComponent
        });

        // stop timer
        this.controlDirective = "stop";

        this.answer = this.guess.self;
        this.$emit("questionResult", { result: res ? "correct" : "wrong" });
      }
    },

    resetParams: function() {
      this.answered = false;
      this.givenAnswer = "";

      eventHub.$emit("optClickedResponse", {
        result: -1,
        component: this.lastClickedOption
      });

      this.answer = "";
    }
  }
};
</script>

<style scoped>
#opts {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: auto;
}

#timer {
  margin-right: 20%;
  margin-left: 20%;
}
</style>
