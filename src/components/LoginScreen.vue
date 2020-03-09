<template>
    <div class="login_screen">
            <div class="form_wrapper">
                    <div class="caption bold">Авторизация</div>
                    <div class="error" v-if="show_error">Неверный логин или пароль</div>
                    <div class="form">
                        <div class="input_wrapper login">
                                <div class="caption">Логин</div>
                                <input 
                                        type="text"
                                        @input="entered_login = $event.srcElement.value; show_error = false"
                                />
                        </div>
                        <div class="input_wrapper password">
                                <div class="caption">Пароль</div>
                                <input 
                                        :type="show_password ? `text` : `password`"
                                        @input="entered_password = $event.srcElement.value; show_error = false"
                                />
                                <div class="button show_pass transparent" @click="show_password = !show_password">
                                        <i class="material-icons" v-html="show_password ? `remove_red_eye` : `remove_red_eye`"></i>
                                </div>
                        </div>
                        <div class="button enter" @click="on_enter_click">Вход</div>
                </div>
            </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import filter from "lodash-es/filter"

export default {
        mixins: [ ],
        name: "SomeComponent",
        components: {},
        log_color: "#ffeb3b",
	props: {
                
        },
        watch: {},
        data: function () {
                return {
                        show_password: false,
                        entered_login: null,
                        entered_password: null,
                        show_error: false
                }
        },
        mounted () {
               
        },
        computed: {
                
        },
        methods: {
                validate ( login, password ) {
                        let result = false
                        let users_file = this.$store.getters.users_file
                        let user_data = filter(users_file.users, ( data )=>{
                                return data.login === login && data.password === password
                        })

                        console.log(user_data)

                        return user_data.length > 0


                },
                on_enter_click () {
                        let is_valid_creds = this.validate( this.entered_login, this.entered_password )

                        if ( !is_valid_creds ) {
                                this.show_error = true 
                        } else {
                                this.$store.commit("logged_in_user", {
                                        login: this.entered_login,
                                        password: this.entered_password
                                })
                        }

                }
        }

}
   
</script>

<style lang="scss">
    .login_screen {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .form_wrapper {
                border: 2px solid #222;
                padding: 24px;
                background: #ddd;
                width: 340px;
                
                .error {
                        margin-bottom: 24px;
                        color: #ffffff;
                        background: #F44336;
                        padding: 16px;
                }

                & > .caption {
                        text-decoration: underline;
                        margin-bottom: 24px;
                }

                .input_wrapper {
                        margin-bottom: 24px;

                        input {
                                padding: 8px 4px 8px 24px;
                                width: 100%;
                                height: 100%;
                                border: 2px solid #a5a5a5;
                        }

                        .show_pass {
                                position: absolute;
                                top: 50%;
                                right: 8px;
                                transform: translateY(-2px);
                                padding: 0;
                        }
                }
        }
    }
</style>