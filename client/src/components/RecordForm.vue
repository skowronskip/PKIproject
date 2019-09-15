<template>
  <div>
    <b-form @submit.prevent="edit ? editRecord() : addRecord()">
      <b-form-input
        type="text"
        v-model="form.name"
        required
        placeholder="Name"
      />
      <b-form-input
        v-if="currentTable === 'Leagues'"
        type="text"
        v-model="form.country"
        required
        placeholder="Country"
      />
      <b-form-input
          v-if="currentTable === 'Teams'"
          type="number"
          v-model="form.leagueId"
          required
          placeholder="LeagueId"
      />
      <b-button type="submit">{{edit ? 'Edit record' : 'Add record'}}</b-button>
      <b-button v-if="edit" @click="resetForm()">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'RecordForm',
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
        this.$store.dispatch('ADD_RECORD', this.form);
      },
      resetForm() {
        this.edit = false;
        this.form = {};
      },
      async editRecord() {
        await this.$store.dispatch('EDIT_RECORD', this.form);
        this.edit = false;
        this.form = {};
      }
    }
  }
</script>
