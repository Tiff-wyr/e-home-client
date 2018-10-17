import Vue from 'vue'
import Vuex from 'vuex'
import {Store} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store =new Store({
  state:{
    token: '',
    userInfo: null,
    loginData: {
      isTitle: true,
      content: '',
      switch: 'one'
    }
  },
  mutations:{
    changeTitle(state, type) {
      state.loginData = type
    },
    setUser(state, userinfo) {
      state.userInfo = userinfo
    },
    setToken(state, token) {
      state.token = token
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key =>sessionStorage .removeItem(key),
      },
    }),
  ],
})
export default store
