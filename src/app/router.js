import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * These routes take advantage of code splitting. Each page is loaded when the route is loaded
 * @returns {VueRouter}
 */

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: () => import('./pages/Home.vue') },
      { path: '/about', name: 'about', component: () => import('./pages/About.vue'), meta: { layout: 'secondary' } },
      { path: '*', name: 'not-found', component: () => import('./pages/NotFound.vue') },
    ],
  });
}