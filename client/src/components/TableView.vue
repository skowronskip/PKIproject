<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Table View</h1>
        <h1>Connected Users: {{ connectedUsers }}</h1>
        <h1>{{ currentTable }}</h1>
        <b-table v-if="!error" :items="currentData">
          <template v-slot:cell(action)="data">
            <b-button @click="editRecord(data.item)">Edit</b-button>
            <b-button @click="removeRecord(data.item)">Remove</b-button>
          </template>
        </b-table>
        <RecordForm v-if="currentTable && !error" :form="form" :edit="edit" />
        <h1 v-if="error">{{error}}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import RecordForm from "./RecordForm";
  export default {
    name: 'TableView',
    components: {RecordForm},
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
        const currentData = this.$store.getters.getCurrentData;
        if (this.currentTable) {
          return currentData.data.map((item) => ({...item, action: ''}))
        }
        return currentData.data
      },
      error() {
        return this.$store.getters.getCurrentData.error;
      }
    },
    methods: {
      editRecord(data) {
        this.edit = true;
        this.form = {...data};
      },
      removeRecord(data) {
        this.$store.dispatch('REMOVE_RECORD', data)
      }
    }
  }
</script>
