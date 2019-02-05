import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import ProductA from '../components/ProductListA.vue';
import ProductB from '../components/ProductListB.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product-a',
            name: 'product-a',
            component: ProductA
        },
        {
            path: '/product-b',
            name: 'product-b',
            component: ProductB
        }
    ]
});
