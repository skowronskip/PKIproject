<template>
  <div>
    <b-form @submit.prevent="addRecord()">
      <b-form-input
        type="text"
        v-model="form.name"
        required
        placeholder="Name"
      />
      <b-form-input
        type="text"
        v-model="form.country"
        required
        placeholder="Country"
      />
      <b-button type="submit">{{edit ? 'Edit record' : 'Add record'}}</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'LeagueForm',
    components: {},
    props: {
      edit: {
        type: Boolean,
        default: false
      },
      form: Object
    },
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
    },
    methods: {
      addRecord() {
        console.log('here');
        this.$store.dispatch('ADD_RECORD', this.form);
      }
    }
  }
</script>
