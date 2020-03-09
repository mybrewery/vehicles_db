<template>
    <div class="range_select">
        <div class="wrapper">
                <div class="result" v-html="result_cap"></div>
                <div class="slider_wrapper">
                        <div class="line"></div>
                        <div class="gizmo from_gizmo"><MovableGizmo @move="on_min_move"/></div>
                        <div class="gizmo to_gizmo"><MovableGizmo @move="on_max_move"/></div>
                </div>
        </div>  
    </div>
</template>

<script>

import { mapState } from 'vuex'
import MovableGizmo from "./MovableGizmo.vue"

export default {
        mixins: [],
        name: "SomeComponent",
        components: { MovableGizmo },
        log_color: "#ffeb3b",
	props: {
                min: {
                        type: Number,
                        default () { return 0 }
                },
                max: {
                        type: Number,
                        default () { return 2020 }
                },
                value_prop: {
                        type: Number,
                        default () { return 2010 }
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
                result_cap () {
                        return ``
                }
        },
        methods: {
                on_min_move ( p ) {
                        console.log(p)
                },
                on_max_move ( p ) {
                        console.log(p)
                },
        }

}
   
</script>

<style lang="scss">
    .range_select {
        .wrapper {
                display: flex;
                flex-direction: column;
                .slider_wrapper {
                        position: relative;

                        .gizmo {
                                position: absolute;
                                width: 16px;
                                height: 16px;
                                border-radius: 50%;
                                background: black;
                        }
                }
        }
    }
</style>