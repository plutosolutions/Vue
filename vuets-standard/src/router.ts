import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import ProductA from './components/ProductA.vue';
import ProductB from './components/ProductB.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/product-a',
      name: 'product-a',
      component: ProductA,
    },
    {
      path: '/product-b',
      name: 'product-b',
      component: ProductB,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
  ],
});
