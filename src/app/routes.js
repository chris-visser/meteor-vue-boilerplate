import Home from './pages/Home.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About, meta: { layout: 'secondary' } },
  { path: '*', name: 'not-found', component: NotFound },
];