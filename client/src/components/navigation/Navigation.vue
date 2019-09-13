<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/">Skowronski PKI Project</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <router-link to="login"><b-button size="sm" class="my-2 my-sm-0" variant="outline-success" >Login</b-button></router-link>
                <router-link to="register"><b-button size="sm" class="my-2 my-sm-0" variant="outline-danger">Register</b-button></router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navigation',
    components: {},
    props: {}
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
