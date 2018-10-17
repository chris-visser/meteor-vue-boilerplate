import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import '../plugins';
import '../filters';
import '../supply';
import '../config';

import createStore from './store';
import createRouter from './router';

import Root from './Root.vue';

/**
 * This function is called on both client and server
 * @params context
 * @returns {{app, router, store}}
 */
/* eslint no-unused-vars: off */
export default function createApp(context = { ssr: false }) {
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
