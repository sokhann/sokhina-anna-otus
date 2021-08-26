<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: 'App',

    methods: {
      ...mapMutations([
        'setLastGameDate'
      ]),
    },

    beforeMount() {
      if (this.$store.state.lastGameDate === null) {
        this.setLastGameDate({amount: Date.now()});
      }
    }
  }

</script>

<style>
  body {
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    font-family: sans-serif;
    width: 400px;
    height: 540px;
    margin: 0 auto;
    padding: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 20px;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 20px;
  }

  p {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    margin: 0 0 20px;
    padding-left: 0;
  }

  li {
    margin-bottom: 10px;
  }
</style>
