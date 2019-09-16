<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/">Skowronski PKI Project</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav>
            <router-link to="/app"><b-button size="sm" class="my-2 my-sm-0" variant="outline-primary">App</b-button></router-link>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button size="sm" class="my-2 my-sm-0" @click="logout()" variant="outline-danger">Log out</b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    name: 'LoggedInNavigation',
    components: {},
    props: {},
    methods: {
        logout() {
            this.$store.dispatch('LOGOUT_USER');
        }
    }
}
</script>

<style>
.btn-outline-success a {
    color: #28a745;
}
.btn-outline-danger a {
    color: #dc3545;
}
.btn:hover a {
    color: white;
    text-decoration: none;
}
.btn {
    margin-left: 5px;
}
</style>
