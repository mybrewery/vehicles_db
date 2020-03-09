import _ from "Helpers";

import packageData from "../../package.json"

function get_file( url ) {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url, false)
        xhr.send()
        // console.log(xhr.responseText)
        return JSON.parse( xhr.responseText )
}

var getters = {
       index_file ( state ) {
               if (state.index_file) {
                       return state.index_file
               } else {
                       let file = get_file( "res/data_p2.json" )
                       state.index_file = file
                       return file
               }
       },
       users_file ( state ) {
                if (state.users_file) {
                        return state.users_file
                } else {
                        let file = get_file( "res/users.json" )
                        state.users_file = file
                        return file
                }
       },
};

export default getters;      