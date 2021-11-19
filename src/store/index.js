import Vue from "vue";
import Vuex from "vuex";
import { DEFAULT_RADIUS, START_GAME, GAME_ENDED } from '../constants';
import { WASTE_ITEMS } from "../waste-items";
import { BUCKS } from "../bucks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heading: 'Выберите правильный бак для сортировки мусора',
    bucks: BUCKS,
    gameInProgress: false,
    gameEnded: false,
    radius: DEFAULT_RADIUS,
    wasteItems: WASTE_ITEMS,
    defaultCoordinats: null,
  },
  mutations: {
    [START_GAME]: state => {
      state.gameInProgress = true;
      state.gameEnded = false;
    },
    [GAME_ENDED]: state => {
      state.gameEnded = true;
      state.gameInProgress = false;
    },
  },
  actions: {},
  modules: {},
  getters: {
    heading: state => state.heading,
    bucks: state => state.bucks,
    gameInProgress: state => state.gameInProgress,
    gameEnded: state => state.gameEnded,
    circleLength: state => 2 * Math.PI * state.radius,
    wasteItems: state => state.wasteItems,
  }
});
