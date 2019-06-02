<template>
  <div id="app">
    <header>
      <div v-bind:style="{transform:'rotateY(' + deg + 'deg)'}">
        <img id="logo-svg" src="./assets/logo.svg">
      </div>
      <h1>Word Guess</h1>
    </header>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { db } from "./main.js";

export default {
  name: "App",
  data() {
    return {
      deg: 0
    };
  },

  created: function() {
    console.log(db);
    setInterval(() => {
      this.deg = this.deg + Object.randomInt(0,40);
    }, 100);
    this.fetchWords();
  },

  methods: {
    // fetch words from external API (CORS is solved via another API since idk how to allow it on gcloud)
    fetchWords: function() {
      const urls = [
        "https://cors-anywhere.herokuapp.com/https://my-project-1493752659302.appspot.com/words/vocab/academic",
        "https://cors-anywhere.herokuapp.com/https://my-project-1493752659302.appspot.com/words/vocab/music"
      ];
      for (let url of urls)
        fetch(url)
          .then(resp => {
            return resp.json();
          })
          .then(words => {
            this.populateDb(words);
          });
    },

    // populate db with fetched words. update on duplicate keys.
    populateDb: function(words) {
      words.forEach(w => {
        db.words.put({
          self: w.self,
          definition: w.definition,
          level: w.level,
          tag: w.tag
        });
      });
    }
  }
};
</script>

<style>
/* Fancy background (Thanks to leaverou @github */
body {
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
}

h1,
h2 {
  font-weight: normal;
}

header {
  margin-top: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  border: 1px solid black;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  text-decoration: none;
  color: black;
  transition: background 0.5s;
}

a:hover {
  background: orange;
}

.page {
  position: fixed;
  width: inherit;
}

.page-leave-active,
.page-enter-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes logo {
  0%,
  100% {
    translate: ;
  }
}

@media screen and (max-width: 450px) {
  #app {
    margin-top: 20px;
  }
}
</style>
