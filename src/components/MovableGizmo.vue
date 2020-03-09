<template>
    <div 
         class="movable_gizmo"
         @mousedown="on_pointerdown"
         @touchstart="on_pointerdown($event.touches[0])"
    />
</template>

<script>

import { mapState } from 'vuex'

export default {
        mixins: [],
        name: "MovableGizmo",
        components: {},
        log_color: "#e91e63",
	props: {
                
        },
        watch: {},
        data: function () {
                return {
                        pointer_state: {
                                captured: false,
                                prev_pos: {
                                        x: 0,
                                        y: 0
                                }
                        }
                }
        },
        mounted () {
                this.on_pointerup = this.on_pointerup.bind(this)
                this.on_pointermove = this.on_pointermove.bind(this)
                this.on_touchmove = this.on_touchmove.bind(this)

                document.body.addEventListener( "mousemove", this.on_pointermove )
                document.body.addEventListener( "touchmove", this.on_touchmove )
                document.body.addEventListener( "mouseup", this.on_pointerup )
                document.body.addEventListener( "touchend", this.on_pointerup )
        },
        destroyed () {
                document.body.removeEventListener( "mousemove", this.on_pointermove )
                document.body.removeEventListener( "touchmove", this.on_touchmove )
                document.body.removeEventListener( "mouseup", this.on_pointerup )
                document.body.removeEventListener( "touchend", this.on_pointerup )
        },
        computed: {
                
        },
        methods: {
            on_pointerdown ( evt ) {
                this.pointer_state.prev_pos.x = evt.pageX
                this.pointer_state.prev_pos.y = evt.pageY

                this.pointer_state.captured = true
            },
            on_pointerup () {
                    this.pointer_state.captured = false
            },
            on_pointermove( evt ) {
                if ( this.pointer_state.captured ) {
                        let delta_x = -(this.pointer_state.prev_pos.x - evt.pageX )
                        let delta_y = -(this.pointer_state.prev_pos.y - evt.pageY )
                        this.pointer_state.prev_pos.x = evt.pageX
                        this.pointer_state.prev_pos.y = evt.pageY
                        this.$emit( "move", {
                                x: delta_x,
                                y: delta_y
                        } )
                }
            },
            on_touchmove ( evt ) {
                   this.on_pointermove( evt.touches[0] ) 
            }
        }

}
   
</script>

<style lang="scss">
    .movable_gizmo {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: black;
    }
</style>