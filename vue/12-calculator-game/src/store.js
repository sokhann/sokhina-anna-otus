import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { SECONDS_IN_MIN, SUM } from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastGameDate: null,
    time: "1",
    level: "1",
    operations: [SUM],
    totalTasksCount: 0,
    rightAnswersCount: 0
  },

  plugins: [createPersistedState()],

  getters: {
    roundTime: ({ time }) => {
      return time * SECONDS_IN_MIN;
    }
  },

  mutations: {
    setLastGameDate(store, payload) {
      store.lastGameDate = payload.amount;
    },

    setTime(store, payload) {
      store.time = payload.amount;
    },

    setLevel(store, payload) {
      store.level = payload.amount;
    },

    setOperations(store, payload) {
      store.operations = payload.amount;
    },

    setTotalTasksCount(store, payload) {
      store.totalTasksCount = payload.amount;
    },

    setRightAnswersCount(store, payload) {
      store.rightAnswersCount = payload.amount;
    }
  }
});
