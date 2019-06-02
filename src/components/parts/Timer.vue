<template>
  <div id="timer">
    <div v-bind:style="{width: progress + '%' }" id="line"></div>
  </div>
</template>


<script>
export default {
  name: "Timer",
  props: ["directive"],
  data() {
    return {
      limit: 15000,
      interval: null,
      step: 200,
      progress: 0
    };
  },
  methods: {
    start: function() {
      this.reset();
      this.step = this.limit / 100;
      this.interval = setInterval(this.count, this.step);
    },

    count: function() {
      this.progress--;
    },

    stop: function() {
      clearInterval(this.interval);
    },

    reset: function() {
      this.progress = 100;
    }
  },

  watch: {
    progress: function() {
      if (this.progress === 0) {
        this.$emit("timer", "timeout");
      }
    },

    directive: function() {
      switch (this.directive) {
        case "stop":
          this.stop();
          break;

        case "start":
          this.start();
          break;
        case "reset":
          this.reset();
          break;
      }
    }
  }
};
</script>


<style scoped>
#line {
  background: red;
  height: 3px;
}
</style>
