<template>
  <div>
    <h1>MAIN APP</h1>
    <h1>Connected Users: {{ connectedUsers }}</h1>
    <b-form-select v-model="selectedTable" :options="tablesNames" >
      <option :value="null">Please select an option</option>
    </b-form-select>
    <b-button @click="goToTableView()">Show table</b-button>
  </div>
</template>

<script>
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
      socket() {
        return this.$store.getters.getSocket
      },
      connectedUsers() {
        return this.$store.getters.getConnectedUsers
      },
      tablesNames() {
        return this.$store.getters.getTablesNames.map(name => ({value: name, text: name}))
      }
    },
    data() {
      return {
        selectedTable: null,
      }
    },
    methods: {
      goToTableView() {
        if(this.selectedTable) {
          this.$store.dispatch('SHOW_TABLE_VIEW', this.selectedTable);
        }
      }
    }
  }
</script>
