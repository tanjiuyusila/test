import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    radioData:[],
    selectionData:[],
    programData:[],
    nowId:1,
    nowData:[],
  },
  mutations: {
    // searchAnswer(state,id){
    //   state.nowId = id;
    // },
    saveRadio(state,data){
      state.radioData.push(data);
      console.log(state.radioData);
    },
  },
  actions: {
    // searchAnswer({commit},id){
    //   commit('searchAnswer',id)
    // },
    saveRadio({commit},[...args]){
      // console.log(args);
      var data = {
        sc_id :args[0],
        user_answer:args[1],
        commit_date:new Date()
      };
      // console.log(temp);
      commit('saveRadio',data);
     },
  },
});
