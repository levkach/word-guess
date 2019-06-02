<template>
  <div id="result">
    <h2>Game Over</h2>
    <h3>You have guessed:</h3>
    <word-list class="result" v-bind:words="correctList"></word-list>
    <h3>You have not guess:</h3>
    <word-list class="result" v-bind:words="wrongList"></word-list>

    <div v-if="canEdit" id="record">
      <label for="username">Enter your name</label>
      <input v-model="username" autofocus="true" name="username" id="username" type="text">
      <router-link
        id="save"
        v-bind:newUsername="username"
        v-bind:newRecord="records"
        v-bind:canReturn="true"
        :to="{name:'Records', params:{ 'newUsername': username, 'newRecord' : records, 'canReturn': true}}"
      >Save</router-link>
    </div>

    <router-link id="home" to="/home">Dismiss</router-link>
  </div>
</template>

<script>
import WordList from "./parts/WordList";

export default {
  name: "Result",
  components: { WordList },
  props: ["previousName", "records", "canEdit"],
  data() {
    return {
      username: this.previousName || ""
    };
  },

  created: function() {
    // Play sound only on game ending
    if (this.canEdit) {
      const a = new Audio(require("../assets/sounds/gameleave.wav"));
      a.play();
    }
  },

  computed: {
    correctList: function() {
      console.log(this.records);
      if (typeof this.records == "undefined") {
        return [];
      }

      return this.records
        .filter(w => {
          return w.result;
        })
        .map(w => {
          return w.word;
        });
    },
    wrongList: function() {
      if (typeof this.records == "undefined") {
        return [];
      }
      return this.records
        .filter(w => {
          return !w.result;
        })
        .map(w => {
          return w.word;
        });
    }
  }
};
</script>

<style scoped>
#result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#record {
  margin-top: 10px;
  margin-bottom: 10px;
}

#record #username {
  margin-left: 10px;
}

#record #save {
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
}

#home {
  margin-top: 20px;
}
</style>
