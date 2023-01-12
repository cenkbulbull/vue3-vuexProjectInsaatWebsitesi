import { createStore } from 'vuex'


export default createStore({
  state: {
    tanitim:"",
    referanslar:[],
    sirketler:[]
  },
  getters: {
    getStateTanitim(state){
      return state.tanitim
    },
    getStateSirketler(state){
      return state.sirketler
    },
    getStateRef(state){
      return state.referanslar
    }
  },
  mutations: {
    setStateTanitim(state,tanitim){
      state.tanitim=tanitim
    },
    setStateReferanslar(state,referanslar){
      //console.log(referanslar)
      state.referanslar=referanslar
    },
    setStateSirketler(state,sirketler){
      if (state.sirketler.length< sirketler.length-1) { //referanslarda gerçek çözüm yapıldı, bu bir alternatif olarak yazıldı
        state.sirketler.push(sirketler)
      }
    }

  },
  actions: {
    getTanitim(context,tanitim){
      context.commit("setStateTanitim",tanitim)
    },
    getReferanslar(context,referanslar){
      context.commit("setStateReferanslar",referanslar)
    },
    getSirketler(context,sirketler){
      context.commit("setStateSirketler",sirketler)
    }
  }
})
