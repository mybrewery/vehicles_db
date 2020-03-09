import _ from "Helpers";
import set from "lodash-es/set"
import get from "lodash-es/get"

var mutations = {
	
        logged_in_user ( state, payload ) {
                

                if (!payload || !payload.login || !payload.password) {
                        this.commit( "show_login_screen", true )
                        state.logged_in_user.login = null
                        state.logged_in_user.password = null
                } else {
                        state.logged_in_user.password = payload.password
                        state.logged_in_user.login = payload.login
                }
        },
        show_login_screen ( state, value ) {
                state.show_login_screen = value
        }
};

export default mutations;