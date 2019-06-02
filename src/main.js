import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import { } from './polyfills.js'

// Global DB
import Dexie from "dexie";

import VModal from 'vue-js-modal'

Vue.config.productionTip = false

const db = new Dexie("WordGuessDB");
db.version(1).stores({
  words: "self, definition, tag, level",
  records: "++id, username, score"
});

// Event Hub for message conversation between question and answer options
const eventHub = new Vue({});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VModal)

export { eventHub, db };
