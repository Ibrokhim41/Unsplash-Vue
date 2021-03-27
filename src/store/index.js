import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";
import unsplash from "./modules/unsplash";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    unsplash,
    auth,
  },
});
