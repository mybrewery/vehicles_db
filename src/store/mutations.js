import _ from "Helpers";
import set from "lodash-es/set"
import get from "lodash-es/get"

var mutations = {
	
        logged_in_user ( state, payload ) {
                state.logged_in_user.password = payload.password
                state.logged_in_user.login = payload.login
        }  
};

export default mutations;