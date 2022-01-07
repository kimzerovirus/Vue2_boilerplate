import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/paging',
		name: 'PagingList',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "PagingList" */ '../views/PagingList.vue'),
	},
	{
		path: '/paging2',
		name: 'PagingList2',
		component: () =>
			import(/* webpackChunkName: "PagingList2" */ '../views/PagingList2.vue'),
	},
	{
		path: '/paging3',
		name: 'PagingList3',
		component: () =>
			import(/* webpackChunkName: "PagingList2" */ '../views/PagingList3.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
