<template>
  <h1>Nasa Images with a <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">ue</h1>
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  setup () {
    return {}
  },
  components: {
    HomePage
  }
}
</script>

<style>
.vue-logo{
  height: .75em;
}
</style>
