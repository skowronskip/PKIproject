<template>
  <div>
    <h1>MAIN APP</h1>
    <h1>Connected Users: {{ connectedUsers }}</h1>
    <h1>{{ tablesNames }}</h1>
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
  import socket from "../socket";
  export default {
    name: 'MainApp',
    components: {},
    mounted() {
      this.socket.on('UPDATE_CONNECTED_USERS', ({connectedUsers}) => {
        this.$store.dispatch('UPDATE_CONNECT_USER', connectedUsers)
      });
      this.socket.on('UPDATE_TABLES_NAMES', ({tablesNames}) => {
        this.$store.dispatch('UPDATE_TABLES_NAMES', tablesNames)
      });
    },
    computed: {
      connectedUsers() {
        return this.$store.getters.getConnectedUsers
      },
      tablesNames() {
        return this.$store.getters.getTablesNames
      }
    },
    data() {
      return {
        socket: socket
      }
    }
  }
</script>
