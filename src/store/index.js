import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        key: "baidu1",
        value: "hello",
      },
      {
        id: 2,
        key: "baidu2",
        value: "hello",
      },
      {
        id: 3,
        key: "baidu3",
        value: "hello",
      },
      {
        id: 4,
        key: "baidu4",
        value: "hello",
      },
      {
        id: 5,
        key: "baidu5",
        value: "hello",
      },
      {
        id: 6,
        key: "baidu",
        value: "hello",
      },
      {
        id: 7,
        key: "baidu",
        value: "hello",
      },
      {
        id: 8,
        key: "baidu",
        value: "hello",
      },
      {
        id: 9,
        key: "baidu",
        value: "hello",
      },
      {
        id: 10,
        key: "baidu",
        value: "hello",
      },
    ],
  },
  mutations: {
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
  },
  modules: {},
});
