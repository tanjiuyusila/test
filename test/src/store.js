import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    radioData:[],
    selectionData:[],
    programData:[],
    // nowId:1,
    nowData:[],
  },
  mutations: {
    searchAnswer(state,id){
      // state.nowId = id;
      var a = state.radioData.filter((elem,index) => elem.sc_id == id);
      // console.log(a);
      state.nowData = a;
      if(a.length > 0){
        state.nowData = a;
      }
    },
    searchSelect(state,id){
      var a = state.selectionData.filter((elem,index) => elem.mc_id == id) ;
      // console.log(state.selectionData);
      state.nowData = a;
      // console.log(state.nowData)
      state.nowData = a;
      if(a.length > 0){
        state.nowData = a;
      }

    },
    saveRadio(state,data){
      // console.log(data);

      var a = state.radioData.filter((elem,index) => elem.sc_id == data.sc_id);
      // console.log(a);
      if(a.length == 0){
        state.radioData.push(data);
      }else{
        state.radioData.forEach((elem,index) => {
          if(elem.sc_id == data.sc_id){
            elem.user_answer = data.user_answer;
            elem.commit_date = new Date();
          }
        })
      }
      console.log(state.radioData);
    },
    saveCheckbox(state,data){
      // console.log(data);
      var a = state.selectionData.filter((elem,index) => elem.mc_id == data.mc_id);
      // console.log(a);
      if(a.length == 0){
        state.selectionData.push(data);
        // console.log(state.selectionData);
      }else{
        state.selectionData.forEach((elem,index) => {
          if(elem.mc_id == data.mc_id){
            // console.log(elem.user_answer)
            elem.user_answer = data.user_answer;
            elem.commit_date = new Date();
            // console.log(elem.user_answer)
          }
          if(elem.user_answer.length == 0){
            state.selectionData.splice(index,1);
          }
        })
      }
      console.log(state.selectionData);
    },
  },
  actions: {
    searchAnswer({commit},id){
      commit('searchAnswer',id)
    },
    searchSelect({commit},id){
      // console.log(id);
      commit('searchSelect',id)
    },
    saveRadio({commit},[...args]){
      // console.log(args);
      var data = {
        sc_id :args[0],
        user_answer:args[1],
        token_id:args[2],
        commit_date:new Date()
      };
      // console.log(data);
      commit('saveRadio',data);
     },
    saveCheckbox({commit},[...args]){
      // console.log(args);
      var data = {
        mc_id :args[0],
        user_answer:args[1],
        token_id:args[2],
        commit_date:new Date()
      };
      // console.log(data);
      commit('saveCheckbox',data);
    },


  },

});
