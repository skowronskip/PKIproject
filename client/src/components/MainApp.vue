<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>MAIN APP</h1>
        <h1>Connected Users: {{ connectedUsers }}</h1>
        <b-form-select v-model="selectedTable" :options="tablesNames" >
          <option :value="null">Please select an option</option>
        </b-form-select>
        <b-button @click="goToTableView()">Show table</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1>Send query</h1>
        <b-form-input type="text" v-model="specificQuery" placeholder="Send a query to database" />
        <b-button @click="goToTableViewWithQuery()">Send query</b-button>
      </b-col>
    </b-row>
  </b-container>
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
      this.socket.on('UPDATE_CURRENT_DATA', ({currentData}) => {
        this.$store.dispatch('UPDATE_CURRENT_DATA', currentData)
      });
      this.specificQuery = this.$store.getters.getSpecificQuery
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
      },
    },
    data() {
      return {
        selectedTable: null,
        specificQuery: null
      }
    },
    methods: {
      goToTableView() {
        if(this.selectedTable) {
          this.$store.dispatch('SHOW_TABLE_VIEW', this.selectedTable);
        }
      },
      goToTableViewWithQuery() {
        if(this.specificQuery) {
          this.$store.dispatch('SHOW_TABLE_VIEW_FROM_SPECIFIC_QUERY', this.specificQuery);
        }
      }
    }
  }
</script>
