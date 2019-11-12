import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	//Vuex的配置
	state: {
		user: '',
		lxj: '',
		toobj: {},
		to3obj: {},
		toStep: [],
		toStrImg: [],
		turnPage: [],
		isshow:true
	},
	mutations: {
		user: function(state, data) {
			state.user = data.data;
		}
	}

});

Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('title', {
	inserted: function(el, binding) {
		document.title = el.dataset.title
	}
})

new Vue({
	router,
	store, //store: store
	render: h => h(App),
}).$mount('#app')
