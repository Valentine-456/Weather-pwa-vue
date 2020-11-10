const menu = {
  namespaced: "true",
  state: {
    isOpened: false,
  },
  mutations: {
    OPEN_MENU(state) {
      state.isOpened = true;
    },
    CLOSE_MENU(state) {
      state.isOpened = false;
    },
  },
};

export default menu;
