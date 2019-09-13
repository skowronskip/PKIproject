<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Login Page</h1>
                <b-form>
                    <b-form-input
                        type="text"
                        required
                        placeholder="Login"
                    ></b-form-input>
                    <b-form-input
                            type="password"
                            required
                            placeholder="Password"
                    ></b-form-input>
                    <b-button>Login</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'Login',
    components: {},
    props: {}
}
</script>
