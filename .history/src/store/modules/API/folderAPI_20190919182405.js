const mutations = {
    ApiGetFolder: () => {
        this.$http.get(this.$store.state.API_URL + 'folder').then((response) => {
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