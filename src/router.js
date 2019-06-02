import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home"
import Game from "@/components/Game"
import Dict from "@/components/Dict"
import About from "@/components/About"
import Play from "@/components/Play"
import Result from "@/components/Result"
import Records from "@/components/Records"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/game',
      name: 'Game',
      component: Game,
    },

    {
      path: '/dict',
      name: 'Dictionary',
      component: Dict,
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/play',
      name: 'Play',
      component: Play,
      props: true
    },

    {
      path: '/result',
      name: 'Result',
      component: Result,
      props: true
    },

    {
      path: '/records',
      name: 'Records',
      component: Records,
      props: true
    }

  ]
})
