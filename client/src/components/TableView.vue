<template>
  <div>
    <h1>Table View</h1>
    <h1>Connected Users: {{ connectedUsers }}</h1>
    <h1>{{ currentTable }}</h1>
    <b-table :items="currentData">
      <template v-slot:cell(action)="data">
        <b-button @click="editRecord(data.item)">Edit</b-button>
        <b-button>Remove</b-button>
      </template>
    </b-table>
    <RecordForm :form="form" :edit="edit" />
  </div>
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
        return this.$store.getters.getCurrentData.map((item) => ({...item, action: ''}));
      }
    },
    methods: {
      editRecord(data) {
        this.edit = true;
        this.form = {...data};
      }
    }
  }
</script>
