import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import './plugins';
import './filters';
import './supply';

import createStore from './store';
import createRouter from './router';

import Root from './Root.vue';

import DefaultLayout from './layouts/DefaultLayout.vue';
import SecondaryLayout from './layouts/SecondaryLayout.vue';


Vue.component('default-layout', DefaultLayout);
Vue.component('secondary-layout', SecondaryLayout);


function createApp() {

  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    el: '#app', // Mount to the #app element
    router,
    store,
    ...Root, // Connect the Root Vue component
  });

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  return {
    app,
    router,
    store,
  };
}

export default createApp;