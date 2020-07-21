import * as actionTypes from './actions'
const intialState = {
    ingreadents : {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice:4,
};
const INGRADIENT_PRICE = {
    salad:0.5,
    cheese:1,
    meat:2
  };
const reducer = (state = intialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingreadents: {
                    ...state.ingreadents,
                    [action.ingreadentName]: state.ingreadents[action.ingreadentName] + 1
                },
                totalPrice: state.totalPrice + INGRADIENT_PRICE[action.ingreadentName]
            }
        case actionTypes.REMOVE_INGREDIENT: 
                return {
                    ...state,
                    ingreadents: {
                        ...state.ingreadents,
                        [action.ingreadentName]: state.ingreadents[action.ingreadentName] - 1
                    },
                    totalPrice: state.totalPrice - INGRADIENT_PRICE[action.ingreadentName]
                }
  
        default: 
                return state;
}
};

export default reducer