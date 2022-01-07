import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//global component
import Alert from '@/components/Alert.vue';
import Pagination from '@/components/Pagination.vue';

Vue.component('Alert', Alert);
Vue.component('Pagination', Pagination);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
