<template>
  <div v-on:click="toggleClick" v-bind:class="{active: isClicked}" class="diff">{{text}}</div>
</template>

<script>
export default {
  name: "Diff",
  props: ["text", "randomize"],
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    toggleClick: function() {
      this.isClicked = !this.isClicked;
      this.$emit("clickedDiff", { text: this.text, state: this.isClicked });
    }
  }
};
</script>

<style>
.diff {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10% 50% 5% 15%;
  padding: 10px;
  transition: background 0.5s;
}

.diff.active {
  background: orange;
}
</style>
