<template>
    <b-container>
        <b-row>
            <b-col>
                <b-form @submit.prevent="login()">
                    <h1>Register Page</h1>
                    <b-form-input
                            type="email"
                            required
                            placeholder="E-mail"
                            v-model="form.email"
                    ></b-form-input>
                    <b-form-input
                            type="text"
                            required
                            placeholder="Login"
                            v-model="form.login"
                    ></b-form-input>
                    <b-form-input
                            type="password"
                            required
                            placeholder="Password"
                            v-model="form.password"
                    ></b-form-input>
                    <b-button type="submit">Login</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'Register',
    components: {},
    props: {},
    data() {
        return {
            form: {}
        }
    },
    methods: {
        login() {
            this.$store.dispatch('SIGNUP_USER', {login: this.form.login, password: this.form.password, email: this.form.email});
        }
    }
}
</script>
