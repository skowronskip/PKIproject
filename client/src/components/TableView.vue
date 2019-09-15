<template>
  <div>
    <h1>Table View</h1>
    <h1>Connected Users: {{ connectedUsers }}</h1>
    <h1>{{ currentTable }}</h1>
    <b-table :items="currentData" />
    <LeagueForm :form="form" :edit="edit" />
  </div>
</template>

<script>
  import LeagueForm from "./LeagueForm";
  export default {
    name: 'TableView',
    components: {LeagueForm},
    mounted() {},
    data() {
      return {
        edit: false,
        form: {}
      }
    },
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
