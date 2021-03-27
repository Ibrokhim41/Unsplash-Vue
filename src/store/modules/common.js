export default {
  state: {
    burger: false,
    regShow: false,
  },
  mutations: {
    burgerToggle(state) {
      return (state.burger = !state.burger);
    },
    showReg(state) {
      state.regShow = !state.regShow;
    },
  },
  getters: {
    getBurger(state) {
      return state.burger;
    },
    getRegShow(state) {
      return state.regShow;
    },
  },
};
