import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'; //引入 vuex
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex); //使用 vuex

let defaultToken = null;
let defaultUser = null;
let defaultAdmin = null;
let defaultLevel = null;
// localStorage.setItem("token","666");
// console.log("read local token:" + localStorage.getItem("token"));
try {
    if (localStorage.getItem("token")) {
        defaultToken = localStorage.getItem("token");
        // console.log("read local token:" + defaultToken);
    }
    if (localStorage.getItem("level")) {
        defaultLevel = localStorage.getItem("level");
    }
    if (localStorage.getItem("user")) {
        defaultUser = JSON.parse(localStorage.getItem("user"));
        defaultAdmin = localStorage.getItem("admin");
    }
} catch (e) {
}


export default new Vuex.Store({
    strict: true,
    state: {
        token: defaultToken,
        user: defaultUser,
        admin: defaultAdmin,
        level: defaultLevel,
        menu_active_name: 'home',
    },
    mutations,
    actions,
    getters,
})
