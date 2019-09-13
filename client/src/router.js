import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./components/Login";
import Register from "./components/Register";

Vue.use(Router)

function authRoute(to, from, next) {
  if (localStorage.getItem('jwt')) {
    return next();
  }
  return next({name: 'login'});
}

function onlyForNotLoggedIn(to, from, next) {
  if (localStorage.getItem('jwt')) {
    return next({name: 'home'});
  }
  return next();
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: onlyForNotLoggedIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: onlyForNotLoggedIn
    },
    {
      path: '/test',
      name: 'test',
      component: Home,
      beforeEnter: authRoute
    },
  ]
})
