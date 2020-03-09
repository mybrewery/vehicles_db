import "babel-polyfill"
import _ from "./Helpers"


import Vue from "vue"
import StoreCreator from "store/StoreCreator"
import packageObj from "../package.json"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

window.clog = console.log.bind(console)

class VehiclesDB {
	constructor ( AppComponent ) {
		let $this = this;

		this.dom = document.createElement( "div");
		this.dom.classList.add( "vehicles_db" );

		document.body.appendChild( this.dom )

		let $store = this.$store = new StoreCreator( )


		new Vue({
			vuetify: new Vuetify(),
			el:  this.dom,
			render: createElement => {
					const context = {
						props: {

						},
					};
		
					return createElement(AppComponent, context);
				},
			store : this.$store,
			components: { AppComponent },
			template: '<App/>'
		})

	

		if ( window.NODE_ENV === "development" ) {
			window.Vue = this
		}

		this.$root = this.$store.state.$root;
	}
}

export default VehiclesDB