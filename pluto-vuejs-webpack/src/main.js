import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from './store/store'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store: store,
    router,
    components: {App},
    template: '<App/>'
});
