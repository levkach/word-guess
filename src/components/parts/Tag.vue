<template>
  <div v-on:click="toggleClick" v-bind:class="{active: isClicked}" class="tag">{{text}}</div>
</template>

<script>
export default {
  name: "Tag",
  props: ["text"],
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    toggleClick: function() {
      this.isClicked = !this.isClicked;
      this.$emit("clickedTag", {text: this.text, state: this.isClicked});
    }
  }
};
</script>

<style>
.tag {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 40%;
  padding: 10px;
  transition: background 0.5s;
}

.tag.active {
  background: lime;
}
</style>
