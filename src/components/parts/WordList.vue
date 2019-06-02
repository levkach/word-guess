<template>
  <div class="wordlist">
    <word v-for="word in words" :key="word.self" v-bind:word="word"></word>
  </div>
</template>


<script>
import Word from "./Word";

export default {
  name: "WordList",
  props: ["words"],
  components: {
    Word
  }
};
</script>


<style scoped>
.wordlist {
  width: 600px;
  height: auto;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
}

.wordlist:empty {
  border-bottom: 0px;
}

.wordlist:empty::after {
  margin-top: 30px;
  font-size: 22px;
  content: "No words match your selection  \1F611";
}

/* For result page, because there is no selection there */
.wordlist.result:empty::after {
  margin-top: 30px;
  font-size: 22px;
  content: "No such words";
}

@media screen and (max-width: 450px) {
  .wordlist {
    width: 350px;
  }
}
</style>
