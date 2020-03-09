<template>
    <v-app class="vehicles_db"> 
        <LoginScreen
            v-if="$store.state.show_login_screen"
        />
        <Catalog
            v-if="!$store.state.show_login_screen"
        />
        <div class="footer flex-row">
            <span>Додаток створено в рамках практичної і курсової роботи студентом Панасенко Н. В.</span> 
            <span class="year">2020 р.</span>
            <a href="https://github.com/mybrewery/vehicles_db">GitHub</a>
        </div>
    </v-app>
</template>

<script>




import { mapState } from 'vuex'
import LoginScreen from "./LoginScreen.vue"
import Catalog from "./Catalog.vue"


export default {
    mixins: [ ],
    components: { LoginScreen, Catalog },
    name: "App",
    log_color: "#ffffff",
    mounted () {
        window.app = this;
    },  
    data () {
        return {
            
        }
    },
    computed: {
    },
    watch: {},
    methods: {
        
    }
}
   
</script>

<style lang="scss">
    html, body {
        background-color: #eee;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    .bold {
        font-weight: 700;
    }

    .regular {
        font-weight: 500;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-col {
        display: flex;
        flex-direction: row;
    }


    * {
        user-select: none;
        touch-action: manipulation;
        overscroll-behavior: none;
        outline: none;
        position: relative;
        box-sizing: border-box;
        border-radius: 0;
    }

    .button {
        cursor: pointer;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #607d8b;
        color: #eee;
        font-weight: 700;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: #43535a;
            color: #fff;
        }

        &.transparent {
            background-color: transparent;
            color: #111;

            &:hover {
                background-color: transparent;
                color: #444;
            }
        }
    }


    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
    }

    /* Rules for sizing the icon. */
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    /* Rules for using icons as black on a light background. */
    .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
    .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

    /* Rules for using icons as white on a dark background. */
    .material-icons.md-light { color: rgba(255, 255, 255, 1); }
    .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

    .vehicles_db {
        width: 100%;
        height: 100%;

        .footer {
            height: 32px;
            width: 100%;
            justify-content: center;
            align-items: center;
            background-color: #7c608b;
            font-size: 12px;
            color: #eee;
            border-radius: 0;

            span {
                margin: 0 4px;
            }

            span.year {
                color: yellow;
            }

            span.email {
                color: red;
            }

            a {
                color: #ddffff;
            }

        }
    }

</style>