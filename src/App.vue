<template>
  <div id="app">
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
    return {};
  },

  created: function() {
    console.log(db);
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
h1,
h2 {
  font-weight: normal;
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

/* .page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-50px) ;
}
.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateX(0px);
} */
.page-leave-active,
.page-enter-active {
  /* animation: coming 1s;
  animation-delay: 0.5s; */
  transition: opacity 0.25s;
  /* transition: opacity, transform 200ms ease-out; */
}

.page-enter,
.page-leave-to {
  /* animation: coming 1s;
  animation-delay: 0.5s; */
  opacity: 0;
  /* transition: opacity, transform 200ms ease-out; */
}

/* .page-leave-active {
  animation: going 1s;
} */

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

@media screen {
  #app {
    margin-top: 20px;
  }
}
</style>
