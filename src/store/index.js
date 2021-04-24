import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    menuActive: "全部",
  },
  mutations: {
    // lists
    updateLists(state, data) {
      state.lists = data;
    },
    addLists(state, data) {
      state.lists.unshift(data);
    },
    updateSimpleLists(state, data) {
      const dataIndex = state.lists.findIndex(
        (item) => item.key === data.oldKey
      );
      state.lists[dataIndex] = data;
    },
    delSimpleLists(state, data) {
      const dataIndex = state.lists.findIndex((item) => item.key === data.key);
      state.lists.splice(dataIndex, 1);
    },

    // menu
    changeMenuActive(state, menu) {
      state.menuActive = menu;
    },
  },
  modules: {},
});
