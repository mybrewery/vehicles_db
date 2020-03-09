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
                <div class="filters_wrapper">
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
                <div class="items_list_wrapper">
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
                                        <div class="button next_page"  @click="on_next_button_click" v-if="current_page < this.max_page">
                                                <div class="cap">Наступна сторiнка</div>
                                                <i class="material-icons">navigate_next</i>
                                        </div>
                                </div>
                        </div>
                </div>
        </div> 
    </div>
</template>

<script>

import { mapState } from 'vuex'
import CatalogItem from "./CatalogItem.vue"
import RangeSelect from "./RangeSelect.vue"
import throttle from "lodash-es/throttle"
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
                "models.year" (v) { this.update_filtered_throttled(); },
                "models.mileage" (v) { this.update_filtered_throttled(); },
                "models.engine_capacity" (v) { this.update_filtered_throttled(); },
                "models.price" (v) { this.update_filtered_throttled(); },
                "models.vendors" (v) { this.update_filtered_throttled(); this.models.car_models = [] },
                "models.car_models" (v) { this.update_filtered_throttled(); },
                "models.gearboxes" (v) { this.update_filtered_throttled(); },
        },
        data: function () {
                return {
                        filtered_items: [],
                        current_page: 0,
                        items_per_page: 21,
                        max_page: 1,
                        filters: {
                                year: [1990, 2020],
                                mileage: [0, 200000],
                                engine_capacity: [0, 5],
                                price: [0, 2000000],
                                vendor: null,
                                model_name: null,
                                gearbox_type: null,
                        },
                        models: {
                                year: [1990, 2020],
                                mileage: [0, 200000],
                                engine_capacity: [0, 5],
                                price: [0, 2000000],
                                vendors: [],
                                gearboxes: [],
                                car_models: []
                        }
                }
        },
        mounted () {
        //        this.update_filtered()
               this.update_filtered_throttled = throttle(()=>{
                       console.log("update...");
                       this.update_filtered()
               }, 100)

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
              },
              on_next_button_click () {
                      if ( this.current_page < this.max_page ) {
                              this.current_page++
                              this.update_filtered_throttled()
                      }
              },
              on_prev_button_click () {
                      if ( this.current_page > 0 ) {
                              this.current_page--
                              this.update_filtered_throttled()
                      }
              }
        }

}
   
</script>

<style lang="scss">
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
                        width: 20%;
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
                        width: 80%;
                        overflow-y: auto;
                        overflow-x: hidden;
                        border-radius: 0;
                        padding: 24px;
                        min-height: 100%;
                        
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