import Vue from 'vue'
import Vuex from 'vuex'
import ApiFolder from './modules/API/folderAPI.js'
Vue.use(Vuex)

const state = {
    API_URL: "http://api.duyanhplus.com/CRM/pubclic/api/",
    PUBLIC_URL: "http://api.duyanhplus.com/CRM/pubclic/"
}

export default new Vuex.Store({
    state,
    modules: {
        ApiFolder
    }
})