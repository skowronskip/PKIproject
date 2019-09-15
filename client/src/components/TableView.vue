<template>
  <div>
    <h1>Table View</h1>
    <h1>Connected Users: {{ connectedUsers }}</h1>
    <h1>{{ currentTable }}</h1>
    <b-table :items="currentData" />
  </div>
</template>

<script>
  export default {
    name: 'TableView',
    components: {},
    mounted() {},
    computed: {
      socket() {
        return this.$store.getters.getSocket
      },
      connectedUsers() {
        return this.$store.getters.getConnectedUsers
      },
      currentTable() {
        return this.$store.getters.getCurrentTable
      },
      currentData() {
        return this.$store.getters.getCurrentData
      }
    }
  }
</script>
