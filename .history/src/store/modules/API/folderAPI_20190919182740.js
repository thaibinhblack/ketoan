import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
const mutations = {
    ApiGetFolder: () => {
        this.$http.get(this.$store.state.API_URL + 'folder').then((response) => {
            console.log(response.data)
            return response.data
        })
    }
}

const actions = {
    commitApiGetFolder: ({commit}) => {
        commit("ApiGetFolder")
    }
    
}

export default {
    mutations,
    actions
}