<template>
  <div class="tag-picker">
    <tag @clickedTag="handleTagClick" v-for="tag in tags" :key="tag" v-bind:text="tag"></tag>
  </div>
</template>

<script>
import Tag from "./Tag";

export default {
  name: "TagPicker",
  components: { Tag },
  props: ["randomize"],
  methods: {
    handleTagClick: function(tag) {
      if (tag.state && !this.selected.includes(tag.text)) {
        this.selected.push(tag.text);
      } else {
        this.selected.splice(this.selected.indexOf(tag.text), 1);
      }
      this.$emit("changed", this.selected);
    }
  },
  data() {
    return {
      tags: ["Music", "Animals", "Food", "Academic", "Science"],
      selected: []
    };
  },
  watch: {
    randomize: function() {
      const randTags = this.$children.randomSubArray();
      for (let t of randTags) {
        t.toggleClick.call(); // explicit call in children' components to toggle
      }
    }
  }
};
</script>

<style scoped>
.tag-picker {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
