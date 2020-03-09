<template>
    <div class="catalog">
        <div class="header bold flex-row">
                <div>Уніфікована система доступу до бази даних транспортних засобів.</div>
                <div class="buttons">
                        <div class="button logout transparent" @click="$store.commit(`logged_in_user`, null)">
                                <div class="cap">Вийти</div>
                                <i class="material-icons">exit_to_app</i>
                        </div>
                </div>
        </div>
        <div class="content_wrapper">
                <div v-bind:class="{ active: active_context === `filters` }" class="filters_wrapper" @click="active_context=`filters`">
                        <div class="filter_item_wrapper">
                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                                <v-select 
                                                        v-bind:items="vendors" 
                                                        v-model="models.vendors" 
                                                        label="Виробник" 
                                                        autocomplete multiple chips
                                                ></v-select>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                                <v-select 
                                                        v-bind:items="car_models" 
                                                        v-model="models.car_models" 
                                                        label="Модель" 
                                                        autocomplete multiple chips
                                                ></v-select>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                                <v-select 
                                                        v-bind:items="gearboxes" 
                                                        v-model="models.gearboxes" 
                                                        label="Привід" 
                                                        autocomplete multiple chips
                                                ></v-select>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                                <v-subheader>Рiк</v-subheader>
                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                        <v-range-slider
                                                v-model="models.year"
                                                :max="filters.year[1]"
                                                :min="filters.year[0]"
                                                hide-details
                                                thumb-label="always"
                                                class="align-center"
                                        >
                                        <template v-slot:prepend>
                                                <v-text-field
                                                :value="models.year[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.year, 0, $event)"
                                                ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                                <v-text-field
                                                :value="models.year[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.year, 1, $event)"
                                                ></v-text-field>
                                        </template>
                                        </v-range-slider>
                                        </v-col>
                                        </v-row>
                                </v-card-text>
                                
                                <v-subheader>Пробiг</v-subheader>
                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                        <v-range-slider
                                                v-model="models.mileage"
                                                :max="filters.mileage[1]"
                                                :min="filters.mileage[0]"
                                                hide-details
                                                thumb-label="always"
                                                class="align-center"
                                        >
                                        <template v-slot:prepend>
                                                <v-text-field
                                                :value="models.mileage[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.mileage, 0, $event)"
                                                ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                                <v-text-field
                                                :value="models.mileage[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.mileage, 1, $event)"
                                                ></v-text-field>
                                        </template>
                                        </v-range-slider>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                                <v-subheader>Об'єм двигуна</v-subheader>
                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                        <v-range-slider
                                                v-model="models.engine_capacity"
                                                :max="filters.engine_capacity[1]"
                                                :min="filters.engine_capacity[0]"
                                                :step="0.1"
                                                hide-details
                                                thumb-label="always"
                                                class="align-center"
                                        >
                                        <template v-slot:prepend>
                                                <v-text-field
                                                :value="models.engine_capacity[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.engine_capacity, 0, $event)"
                                                ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                                <v-text-field
                                                :value="models.engine_capacity[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.engine_capacity, 1, $event)"
                                                ></v-text-field>
                                        </template>
                                        </v-range-slider>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                                <v-subheader>Цiна</v-subheader>
                                <v-card-text>
                                        <v-row>
                                        <v-col class="px-4">
                                        <v-range-slider
                                                v-model="models.price"
                                                :max="filters.price[1]"
                                                :min="filters.price[0]"
                                                :step="0.1"
                                                hide-details
                                                thumb-label="always"
                                                class="align-center"
                                        >
                                        <template v-slot:prepend>
                                                <v-text-field
                                                :value="models.price[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.price, 0, $event)"
                                                ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                                <v-text-field
                                                :value="models.price[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(models.price, 1, $event)"
                                                ></v-text-field>
                                        </template>
                                        </v-range-slider>
                                        </v-col>
                                        </v-row>
                                </v-card-text>

                               
                                
                        </div>
                </div>
                <div 
                        v-bind:class="{ active: active_context === `items` }" 
                        v-bind:style="{ overflowY: is_loading ? `hidden`: `auto` }"
                        class="items_list_wrapper" 
                        ref="items_list_wrapper"
                        @click="active_context=`items`"
                >
                        <div class="items_list_wrapper_content_wrapper">
                                <div class="list_wrapper">
                                        <CatalogItem
                                                v-for="(item, index) in filtered_items"
                                                :key="index"
                                                :item_data="item"
                                        />
                                </div>
                                <div class="paginator">
                                        
                                        <div class="button prev_page" @click="on_prev_button_click" v-if="current_page > 0">
                                                <i class="material-icons" >navigate_before</i>
                                                <div class="cap">Попередня сторiнка</div>
                                        </div>
                                        <div class="button next_page"  @click="on_next_button_click" v-if="current_page < max_page && max_page > 0">
                                                <div class="cap">Наступна сторiнка</div>
                                                <i class="material-icons">navigate_next</i>
                                        </div>
                                </div>
                        </div>
                        <div v-if="is_loading" class="loading_wrapper" >
                                <div class="loader">Завантаження</div>
                        </div>
                </div>
        </div> 
    </div>
</template>

<script>

import { mapState } from 'vuex'
import CatalogItem from "./CatalogItem.vue"
import RangeSelect from "./RangeSelect.vue"
import debounce from "lodash-es/debounce"
import values from "lodash-es/values"
import keys from "lodash-es/keys"
import forEach from "lodash-es/forEach"

import filter from "lodash-es/filter"

export default {
        mixins: [],
        name: "Catalog",
        components: { CatalogItem, RangeSelect },
        log_color: "#ffeb3b",
	props: {
                
        },
        watch: {
                "is_loading" ( v ) { this.$refs.items_list_wrapper.scrollTop = 0 },  
                "models.year" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
                "models.mileage" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
                "models.engine_capacity" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
                "models.price" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
                "models.vendors" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced();  this.models.car_models = [] },
                "models.car_models" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
                "models.gearboxes" (v) { this.is_loading = true; this.current_page = 0; this.update_filtered_debounced(); },
        },
        data: function () {
                return {
                        is_loading: true,
                        active_context: "items",
                        filtered_items: [],
                        current_page: 0,
                        items_per_page: 21,
                        max_page: 1,
                        filters: {
                                year: [1990, 2020],
                                mileage: [0, 800000],
                                engine_capacity: [0, 8],
                                price: [0, 3000000],
                                vendor: null,
                                model_name: null,
                                gearbox_type: null,
                        },
                        models: {
                                year: [1990, 2020],
                                mileage: [0, 800000],
                                engine_capacity: [0, 8],
                                price: [0, 3000000],
                                vendors: [],
                                gearboxes: [],
                                car_models: []
                        }
                }
        },
        mounted () {
        //        this.update_filtered()
               this.update_filtered_debounced = debounce(()=>{
                       console.log("update...");
                       this.update_filtered()
               }, 333)

               window.catalog = this

               this.update_filtered()
        },
        computed: {
               vehicles_data () {
                       return this.$store.getters.index_file
               },
               vendors () {
                       return keys(this.vehicles_data.vendors)
               },
               gearboxes () {
                       return keys(this.vehicles_data.gearboxes)
               },
               car_models () {
                       let result = []

                       forEach( this.vehicles_data.models, ( vendor_data, vendor_name )=>{
                               if ( this.models.vendors.length === 0 || this.models.vendors.indexOf( vendor_name ) > -1 ) {
                                       result = result.concat( keys( vendor_data ) )
                               }
                       } )

                       return result

               }
                       
        },
        methods: {
              update_filtered () {
                        let total_data = this.vehicles_data
                        let filtered = filter(total_data.vehicles, ( data )=>{
                                let result = true;


                                if ( this.models.year[0] > 0 && data.year < this.models.year[0] ) result = false;
                                if ( this.models.year[1] > 0 && data.year > this.models.year[1] ) result = false;
                                if ( this.models.mileage[0] > 0 && data.mileage < this.models.mileage[0] ) result = false;
                                if ( this.models.mileage[1] > 0 && data.mileage > this.models.mileage[1] ) result = false;
                                if ( this.models.engine_capacity[0] > 0 && data.engine_capacity < this.models.engine_capacity[0] ) result = false;
                                if ( this.models.engine_capacity[1] > 0 && data.engine_capacity > this.models.engine_capacity[1] ) result = false;
                                if ( this.models.price[0] > 0 && data.price < this.models.price[0] ) result = false;
                                if ( this.models.price[1] > 0 && data.price > this.models.price[1] ) result = false;
                                if ( this.models.vendors.length > 0 && this.models.vendors.indexOf(data.vendor.toLowerCase()) < 0 ) result = false
                                if ( this.models.gearboxes.length > 0 && this.models.gearboxes.indexOf(data.gearbox_type.toLowerCase()) < 0 ) result = false
                                if ( this.models.car_models.length > 0 && this.models.car_models.indexOf(data.model_name.toLowerCase()) < 0 ) result = false

                                return result
                        })

                        this.max_page= Math.floor( filtered.length / this.items_per_page )
                        this.filtered_items = filtered.slice( this.current_page * this.items_per_page, ( this.current_page * this.items_per_page ) + this.items_per_page )

                        this.is_loading = false
              },
              on_next_button_click () {
                      if ( this.current_page < this.max_page ) {
                              this.current_page++
                              this.is_loading = true
                              this.update_filtered_debounced()
                      }
              },
              on_prev_button_click () {
                      if ( this.current_page > 0 ) {
                              this.current_page--
                              this.is_loading = true
                              this.update_filtered_debounced()
                      }
              }
        }

}
   
</script>

<style lang="scss">
        .loader {
        font-size: 10px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #ffffff;
        background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        }
        .loader:before {
        width: 50%;
        height: 50%;
        background: #000000;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        }
        .loader:after {
        background: #fcfcfc;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        }
        @-webkit-keyframes load3 {
        0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
        }
        @keyframes load3 {
        0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
        }
        @media only screen and (max-width: 1600px) {
			.catalog .content_wrapper .items_list_wrapper .list_wrapper .catalog_item {
				width: calc(50% - 24px)!important;
			}
			
			.catalog .content_wrapper .filters_wrapper {
				width: 25%!important;
			}

			.catalog .content_wrapper .items_list_wrapper {
				width: 75%!important;
			}
		}

		@media only screen and (max-width: 1300px) {
			.catalog .content_wrapper .items_list_wrapper .list_wrapper .catalog_item {
				width: calc(100% - 24px)!important;
			}

                        * {
                                font-size: 14px;
                        }

                        input {
                                font-size: 14px;        
                        }

			.catalog .content_wrapper .filters_wrapper {
				width: 90%!important;
                                position: absolute;
                                left: 0;
                                top: 0;
                                transform: translateX(-90%);
                                box-shadow: -18px 17px 0 -24px transparent;
                               

                                &.active {
                                        transform: translateX(0);
                                        z-index: 1;
                                         box-shadow: 12px 17px 76px -24px black;
                                }
				
			}

			.catalog .content_wrapper .items_list_wrapper {
				width: 90%!important;
                                transform: translateX(90%);
                                box-shadow: -18px 17px 0 -24px transparent;

                                &.active {
                                        transform: translateX(11.1%);
                                        z-index: 1;
                                        box-shadow: -18px 17px 76px -24px black;
                                }

                               
			}

                        

                        .vehicles_db .footer.flex-row {
                                align-items: center!important;

                                span:first-child {
                                        display: none;
                                }
                        }

                        .catalog_item {
                                font-size: 14px!important;
                                margin: 6px 12px!important;
                        }

                        .catalog_item .image_wrapper {
                                width: 48px;
                                height: 48px;
                        }

                        .catalog .header {
                                height: 48px;

                                > div:first-child {
                                        font-size: 8px;
                                        display: none;
                                }
                        }
                        
                        .catalog .content_wrapper .items_list_wrapper {
                                padding: 0!important;

                        }
		}

    .v-list-item__content {
                text-transform: uppercase;
        }

        .v-slider--horizontal .v-slider__thumb-label> * {
                background: #1976d2;
                padding: 4px;
                border-radius: 6px;
        }
    
    .catalog {
        overflow: hidden;
        width: 100%;
        height: calc(100% - 32px);

        .header {
                height: 32px;
                align-items: center;
                justify-content: space-between;
                padding: 0 24px;
                background-color: #dbc6e7;
                border-radius: 0;

                .button.logout {
                        .cap {
                                margin-right: 8px;
                        }
                }
        }
        
        .paginator {
                display: flex;
                flex-direction: row;
                margin-bottom: 96px;
                margin-top: 48px;
                justify-content: center;
                .button {
                        margin: 0 12px;
                }
        }

        .content_wrapper {
                display: flex;
                flex-direction: row;
                height: 100%;
                border-radius: 0;
                

                .filters_wrapper {
                        width: 25%;
                        height: 100%;
                        background: #f1f1f1;
                        border-radius: 0;
                        border-right: 1px dotted #dbc6e7;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        overflow-y: auto;

                        .filter_item_wrapper {
                                display: flex;
                                flex-direction: column;

                                .range_select {
                                        width: 100%;
                                }
                        }

                        
                }

                .items_list_wrapper {
                        width: 75%;
                        overflow-y: auto;
                        overflow-x: hidden;
                        border-radius: 0;
                        padding: 24px;
                        min-height: 100%;
                        position: relative;

                         .loading_wrapper {
                                        z-index: 2;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background: #ffffffd1;
                                display: flex;
                                align-items: center;
                                justify-self: center;

                        }
                        
                        .items_list_wrapper_content_wrapper {
                                min-height: 100%;
                        }
                        

                        .list_wrapper {
                                flex-wrap: wrap;
                                flex-direction: row;
                                display: flex;

                                .catalog_item {
                                        width: calc(33% - 24px);
                                }
                        }

                        

                }
        }
    }
</style>