import packageData from "../../package.json"


var state = {
        index_file: null,
        users_file: null,
        logged_in_user: {
                login: null,
                password: null
        }
};

export default state;