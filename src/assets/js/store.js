import {createStore} from 'vuex'

export default createStore({
    state : {
        numbers:[1,2,3]
    },
    mutations : {
        ADD_NUMBER(state,payload){
            state.numbers.push(payload)
        }
    },
    actions : {
        addNumber({commit},payload){
            commit('ADD_NUMBER',payload)
        }
    },
    getters : {
        getNumbers(state){
            return state.numbers
        }
    }
})
