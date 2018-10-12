import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker';
import VueSupply from 'vue-supply';
import VueObserveVisibility from 'vue-observe-visibility';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(VueMeteorTracker);
Vue.config.meteor.freeze = true;

console.log('tracker installed');
Vue.use(VueSupply);

Vue.use(VueObserveVisibility);