<template>

    <div class="catalog_item flex-row">
            <div class="wrapper flex-row">
                    <div class="image_wrapper">
                        <img  :src="item_data.preview_image"/>
                    </div>
                    <div class="info_wrapper flex-column">
                            <div class="info_plate flex-row">
                                    <i class="material-icons">local_taxi</i>
                                    <div class="info_content bold" v-html="item_data.name.replace(`~`, `-`).toUpperCase()"></div>
                            </div>
                            <div class="info_plate flex-row">
                                    <i class="material-icons">access_time</i>
                                    <div class="info_content" v-html="`${item_data.year} р.`"></div>
                            </div>
                            <div class="info_plate flex-row">
                                    <i class="material-icons">location_searching</i>
                                    <div class="info_content" v-html="`${item_data.engine_capacity} л.`"></div>
                            </div>
                            <div class="info_plate flex-row">
                                    <i class="material-icons">usb</i>
                                    <div class="info_content" v-html="`${item_data.gearbox_type} л.`"></div>
                            </div>
                            <div class="info_plate flex-row">
                                    <i class="material-icons">slow_motion_video</i>
                                    <div class="info_content" v-html="`${item_data.mileage} км.`"></div>
                            </div>
                            <div class="info_plate flex-row">
                                    <i class="material-icons">attach_money</i>
                                    <div class="info_content" v-html="`${item_data.price} грн.`"></div>
                            </div>
                    </div>
            </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
        mixins: [],
        name: "SomeComponent",
        components: {},
        log_color: "#ffeb3b",
	props: {
                item_data: {
                        type: Object,
                        default () { return { vendor: "Test", model_name: "Test" } }
                }
        },
        watch: {},
        data: function () {
                return {
                        
                }
        },
        mounted () {
               
        },
        computed: {
                
        },
        methods: {
                
        }

}
   
</script>

<style lang="scss">
    .catalog_item {
        border: 2px solid gainsboro;
        padding: 12px;
        margin: 12px;
        background: #efefef;
        
        .image_wrapper {
                width: 200px;
                overflow: hidden;
                flex-shrink: 0;
                margin-right: 16px;
                overflow: hidden;
                img {
                        height: 100%;
                }
        }

        .info_wrapper {
                flex-grow: 1;
                width: 100%;
                font-size: 16px;
                justify-content: space-between;
                display: flex;
                flex-direction: column;

                .info_plate {
                        align-items:center;
                        // margin-bottom: 6px;
                        i {
                                margin-right: 8px;
                                font-size: 16px;
                                color: #a005f9;
                        }
                }
        }
    }
</style>