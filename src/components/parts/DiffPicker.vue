<template>
  <div class="diff-picker">
    <diff
      @clickedDiff="handleDiffClick"
      v-for="diff in diffs"
      :key="diff"
      v-bind:text="diff"
      v-bind:toggle="randomize"
    ></diff>
  </div>
</template>

<script>
import Diff from "./Diff";

export default {
  name: "DiffPicker",
  components: { Diff },
  props: ["randomize"],
  methods: {
    handleDiffClick: function(diff) {
      if (diff.state && !this.selected.includes(diff.text)) {
        this.selected.push(diff.text);
      } else {
        this.selected.splice(this.selected.indexOf(diff.text), 1);
      }
      this.$emit("changed", this.selected);
    }
  },
  data() {
    return {
      diffs: ["Beginner", "Intermediate", "Advanced"],
      selected: []
    };
  },
  watch: {
    randomize: function() {
      const randDiffs = this.$children.randomSubArray();
      for (let d of randDiffs) {
        d.toggleClick.call();
      }
    }
  }
};
</script>

<style scoped>
.diff-picker {
  margin: 5px;
  display: flex;
  flex-direction: row;
}
</style>
