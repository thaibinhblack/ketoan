import Vue from 'vue'
import Vuex from 'vuex'
import ApiFolder from './modules/API/folderAPI.js'
Vue.use(Vuex)

const state = {
    API_URL: "http://api.duyanhplus.com/CRM/puclic/api/",
    PUBLIC_URL: "http://api.duyanhplus.com/CRM/puclic/"
}

export default new Vuex.Store({
    state,
    modules: {
        ApiFolder
    }
})