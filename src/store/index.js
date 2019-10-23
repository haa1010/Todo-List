import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters:
  {
    getList: state => {
      return state.list
    }
  },
  mutations: {
    syncList(state, arg) {
      state.list = arg
    },

    removeElement(state, title) {
      var new_state = [...state.list];
      var i;
      for (i = 0; i < new_state.length; i++) {
        var obj = new_state[i];
        if (obj.title == title) {
          break;
        }
      }

      if (i < new_state.length) {
        new_state.splice(i, 1);
      }

      state.list = new_state;
    },

    addElement(state, arg) {
      state.list.push(arg)
        
    }
  },
  actions: {
  }
})
