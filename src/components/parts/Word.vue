<template>
  <div class="word" @click="toggleShow">
    <div class="self">{{word.self}}</div>
    <div class="definition" v-show="isClicked">{{word.definition}}</div>
  </div>
</template>

<script>
export default {
  name: "Word",
  props: ["word"],
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    toggleShow: function() {
      this.isClicked = !this.isClicked;
    }
  }
};
</script>

<style scoped>
.word{
  cursor: pointer;
  border: 1px solid gray;
  padding-bottom: 5px;
}
.self {
  font-size: 20px;
}
</style>
