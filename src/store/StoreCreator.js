import Vue from 'vue';
import Vuex from 'vuex';
import _ from "Helpers";
import createPersistedState from "vuex-persistedstate";

import state from "store/state";
import getters from "store/getters";
import mutations from "store/mutations";
import modules from "store/modules";
import actions from "store/actions";

Vue.use(Vuex);

class StoreCreator {
	constructor(params){
		
		this.store = new Vuex.Store({
		  	state : {...state, ...params},
		  	actions,
		  	mutations,
		  	getters,
			modules,
			plugins: [createPersistedState()]
		});
		
		this.store.state.res.root_path = window.RES_PATH

		if ( window.NODE_ENV === "development" ) {
			window.store = this.store;
		}

		return this.store;
	}
}


export default StoreCreator; 