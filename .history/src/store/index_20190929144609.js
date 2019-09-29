import Vue from 'vue'
import Vuex from 'vuex'
import ApiFolder from './modules/API/folderAPI.js'
Vue.use(Vuex)

const state = {
    API_URL: "http://127.0.0.1:8000/api/",
    PUBLIC_URL: "http://127.0.0.1:8000/",
    loading: false,
    folderSelected: {},
    UUID_PARENT: "",
    user: {}
}

export default new Vuex.Store({
    state,
    modules: {
        ApiFolder
    }
})