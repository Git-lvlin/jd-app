import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import good from './modules/good-vuex.js'

export default new Vuex.Store({
    modules:{
        good
    }
})