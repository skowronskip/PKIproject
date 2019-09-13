<template>
  <div id="app">
    <LoggedInNavigation v-if="isLoggedIn" />
    <Navigation v-else />
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
  import Navigation from "./components/Navigation";
  import LoggedInNavigation from "./components/navigation/LoggedInNavigation";
  export default {
    components: {LoggedInNavigation, Navigation},
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    },
    created() {
      this.$store.dispatch('CHECK_IF_USER_IS_LOGGED');
    }
  }
</script>
